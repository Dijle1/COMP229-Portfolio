import Qualification from "../models/Qualification.js";

export const createQualification = async (req, res) => {
  try {
    const qualification = await Qualification.create(req.body);
    res.status(201).json(qualification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    res.json(qualification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(qualification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteQualification = async (req, res) => {
  try {
    await Qualification.findByIdAndDelete(req.params.id);
    res.json({ message: "Qualification deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
