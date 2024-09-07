const express = require('express');
const app = express();
const port = 3000;

// Dummy complaint data (your JSON data)
const complaintsData = [
    {
      "ID": "DCA001",
      "Date Received": "2023-09-01",
      "Complainant Name": "John Doe",
      "Category": "Billing",
      "Subcategory": "Overcharge",
      "Status": "Resolved",
      "Assigned Reviewer": "Alice Johnson",
      "Assigned Authorizer": "Bob Smith",
      "Resolution Date": "2023-09-15",
      "Resolution Time (days)": 14
    },
    {
      "ID": "DCA002",
      "Date Received": "2023-09-03",
      "Complainant Name": "Jane Smith",
      "Category": "Service",
      "Subcategory": "Late Delivery",
      "Status": "In Review",
      "Assigned Reviewer": "Charlie Brown",
      "Assigned Authorizer": "Bob Smith",
      "Resolution Date": null,
      "Resolution Time (days)": null
    },
    {
      "ID": "DCA003",
      "Date Received": "2023-09-05",
      "Complainant Name": "Robert Johnson",
      "Category": "Product",
      "Subcategory": "Defective",
      "Status": "Pending Authorization",
      "Assigned Reviewer": "David Lee",
      "Assigned Authorizer": "Eve Wilson",
      "Resolution Date": null,
      "Resolution Time (days)": null
    },
    {
      "ID": "DCA004",
      "Date Received": "2023-09-07",
      "Complainant Name": "Sarah Williams",
      "Category": "Billing",
      "Subcategory": "Incorrect Fee",
      "Status": "New",
      "Assigned Reviewer": null,
      "Assigned Authorizer": null,
      "Resolution Date": null,
      "Resolution Time (days)": null
    },
    {
      "ID": "DCA005",
      "Date Received": "2023-09-10",
      "Complainant Name": "Michael Brown",
      "Category": "Service",
      "Subcategory": "Poor Customer Support",
      "Status": "In Review",
      "Assigned Reviewer": "Alice Johnson",
      "Assigned Authorizer": "Eve Wilson",
      "Resolution Date": null,
      "Resolution Time (days)": null
    },
    {
      "ID": "DCA006",
      "Date Received": "2023-09-12",
      "Complainant Name": "Emily Davis",
      "Category": "Product",
      "Subcategory": "Missing Parts",
      "Status": "Resolved",
      "Assigned Reviewer": "Charlie Brown",
      "Assigned Authorizer": "Bob Smith",
      "Resolution Date": "2023-09-20",
      "Resolution Time (days)": 8
    },
    {
      "ID": "DCA007",
      "Date Received": "2023-09-15",
      "Complainant Name": "Thomas Anderson",
      "Category": "Billing",
      "Subcategory": "Unauthorized Charge",
      "Status": "New",
      "Assigned Reviewer": null,
      "Assigned Authorizer": null,
      "Resolution Date": null,
      "Resolution Time (days)": null
    },
    {
      "ID": "DCA008",
      "Date Received": "2023-09-18",
      "Complainant Name": "Lisa Taylor",
      "Category": "Service",
      "Subcategory": "Incomplete Service",
      "Status": "In Review",
      "Assigned Reviewer": "David Lee",
      "Assigned Authorizer": "Eve Wilson",
      "Resolution Date": null,
      "Resolution Time (days)": null
    },
    {
      "ID": "DCA009",
      "Date Received": "2023-09-20",
      "Complainant Name": "James Wilson",
      "Category": "Product",
      "Subcategory": "Wrong Item",
      "Status": "Pending Authorization",
      "Assigned Reviewer": "Alice Johnson",
      "Assigned Authorizer": "Bob Smith",
      "Resolution Date": null,
      "Resolution Time (days)": null
    },
    {
      "ID": "DCA010",
      "Date Received": "2023-09-22",
      "Complainant Name": "Patricia Moore",
      "Category": "Billing",
      "Subcategory": "Double Billing",
      "Status": "Resolved",
      "Assigned Reviewer": "Charlie Brown",
      "Assigned Authorizer": "Eve Wilson",
      "Resolution Date": "2023-09-30",
      "Resolution Time (days)": 8
    }
  ];
  

// Set up a basic route to get complaints data
app.get('/api/complaints', (req, res) => {
  res.json(complaintsData);
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Complaints API is running on http://localhost:${port}`);
  console.log(`Also accessible from your IP address.`);
});
