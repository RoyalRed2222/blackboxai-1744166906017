// Initialize customers array from localStorage or empty array
let customers = JSON.parse(localStorage.getItem('customers')) || [];

// DOM elements
const customerForm = document.getElementById('customerForm');
const customerTable = document.getElementById('customerTable');

// Form submit handler
customerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values (phone and VC ID are optional)
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value || null;
    const vcId = document.getElementById('vcId').value || null;
    const amount = parseFloat(document.getElementById('amount').value);
    
    // Create new customer
    const newCustomer = {
        id: Date.now(), // Simple unique ID
        name,
        phone,
        vcId,
        amount,
        pending: true, // Default to pending
        lastPaidDate: null // Track when payment was made
    };
    
    // Add to array and save
    customers.push(newCustomer);
    saveCustomers();
    
    // Reset form and refresh table
    customerForm.reset();
    renderCustomerTable();
});

// Save customers to localStorage
function saveCustomers() {
    localStorage.setItem('customers', JSON.stringify(customers));
}

// Toggle payment status
function togglePaymentStatus(id) {
    const customer = customers.find(c => c.id === id);
    if (customer) {
        customer.pending = !customer.pending;
        saveCustomers();
        renderCustomerTable();
    }
}

// Delete customer
function deleteCustomer(id) {
    customers = customers.filter(c => c.id !== id);
    saveCustomers();
    renderCustomerTable();
}

// Render customer table
function renderCustomerTable() {
    customerTable.innerHTML = customers.map(customer => `
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">${customer.name}</td>
            <td class="px-6 py-4 whitespace-nowrap">${customer.phone}</td>
            <td class="px-6 py-4 whitespace-nowrap">${customer.vcId}</td>
            <td class="px-6 py-4 whitespace-nowrap">₹${new Intl.NumberFormat('en-IN').format(customer.amount)}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${customer.pending ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}">
                    ${customer.pending ? 'Pending' : 'Paid'}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onclick="togglePaymentStatus(${customer.id})" class="text-blue-600 hover:text-blue-900 mr-3">
                    ${customer.pending ? 'Mark Paid' : 'Mark Pending'}
                </button>
                <button onclick="deleteCustomer(${customer.id})" class="text-red-600 hover:text-red-900">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Check for payments older than 30 days
function checkExpiredPayments() {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    customers.forEach(customer => {
        if (!customer.pending && customer.lastPaidDate) {
            const paidDate = new Date(customer.lastPaidDate);
            if (paidDate < thirtyDaysAgo) {
                customer.pending = true;
                customer.lastPaidDate = null;
            }
        }
    });
    saveCustomers();
}

// Initial setup
checkExpiredPayments();
renderCustomerTable();

// Check for expired payments daily
setInterval(checkExpiredPayments, 24 * 60 * 60 * 1000);
