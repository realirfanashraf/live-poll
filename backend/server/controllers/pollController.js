import Poll from '../models/pollModel.js';  

export const createPoll = async (req, res) => {
    const { newPoll } = req.body;

    try {
        const poll = new Poll({
            question: newPoll.question,
            options: newPoll.options,
            createdBy: newPoll.createdBy,
        });

        const savedPoll = await poll.save();

        res.status(200).json({
            status: 200,
            message: 'Poll created successfully',
            poll: savedPoll
        });
    } catch (error) {
        console.error('Error creating poll:', error);

        res.status(500).json({
            status: 500,
            message: 'Failed to create poll',
            error: error.message
        });
    }
};
