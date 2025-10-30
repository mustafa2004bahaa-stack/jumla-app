const Admin = require('../models/Admin');

// Create an admin
exports.createAdmin = async (req, res) => {
  const newAdmin = new Admin(req.body);
  await newAdmin.save();
  res.status(201).json(newAdmin);
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
  const admins = await Admin.find();
  res.json(admins);
};

// Get admin by ID
exports.getAdminById = async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  if (!admin) return res.status(404).json({ message: 'Admin not found' });
  res.json(admin);
};

// Update admin
exports.updateAdmin = async (req, res) => {
  const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!admin) return res.status(404).json({ message: 'Admin not found' });
  res.json(admin);
};

// Delete admin
exports.deleteAdmin = async (req, res) => {
  const admin = await Admin.findByIdAndDelete(req.params.id);
  if (!admin) return res.status(404).json({ message: 'Admin not found' });
  res.json({ message: 'Admin deleted successfully' });
};
