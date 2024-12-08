const Task = require('../models/Task');
const Joi = require('joi');

// Joi Validation Schema
const taskValidationSchema = Joi.object({
    title: Joi.string().required().max(100),
    description: Joi.string().optional(),
    status: Joi.string().valid('TODO', 'IN_PROGRESS', 'COMPLETED').default('TODO'),
    priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH'),
    dueDate: Joi.date().optional(),
});

// Create Task
const createTask = async (req, res, next) => {
    try {
        const { error } = taskValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        next(err);
    }
};

// Get All Tasks
const getTasks = async (req, res, next) => {
    try {
        const { status, priority, sort = 'createdAt', limit = 10, skip = 0 } = req.query;

        const query = {};
        if (status) query.status = status;
        if (priority) query.priority = priority;

        const tasks = await Task.find(query)
            .sort({ [sort]: 1 })
            .skip(parseInt(skip))
            .limit(parseInt(limit));
        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

// Get Task by ID
const getTaskById = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        next(err);
    }
};

// Update Task
const updateTask = async (req, res, next) => {
    try {
        const { error } = taskValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        next(err);
    }
};

// Delete Task
const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(204).send();
    } catch (err) {
        next(err);
    }
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
