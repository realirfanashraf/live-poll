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

export const getPolls = async (req, res) => {
    const { userId } = req.query
    try {
        
        const polls = await Poll.find();
        const userPolls = await Poll.find({ createdBy: userId })
        res.status(200).json({
            status: 200,
            polls: polls,
            userPolls: userPolls
        });
    } catch (error) {
        console.error('Error fetching polls:', error);
        res.status(500).json({
            status: 500,
            message: 'Failed to fetch polls',
            error: error.message
        });
    }
};
