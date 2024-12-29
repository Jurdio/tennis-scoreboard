exports.startMatch = (req, res) => {
    const { player1, player2 } = req.body;

    if (!player1 || !player2) {
        return res.status(400).json({ message: "Both players' names are required." });
    }

    const gameData = {
        player1,
        player2,
        startTime: new Date(),
    };

    res.status(200).json({
        message: 'tMatch started successfully!',
        gameData,
    });
};
