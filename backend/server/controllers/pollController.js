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

export const votePoll = async (req, res) => {
    const { votedPoll, userId, selectedOption } = req.body;
    try {
        let poll = await Poll.findById(votedPoll._id);
        if (poll) {
            const existingVote = poll.votes.find(vote => vote.votedBy.toString() === userId);
            if (existingVote) {
                existingVote.option = selectedOption; 
            } else {
                poll.votes.push({ option: selectedOption, votedBy: userId });
            }
            await poll.save(); 
            return res.status(200).json({ status: 200, message: "updatedSuccessfully" });
        } else {
            return res.status(404).json({ status: 404, message: "Poll not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "Internal server error" });
    }
};



