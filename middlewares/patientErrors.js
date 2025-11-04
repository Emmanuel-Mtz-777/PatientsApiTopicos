export class PatientErrorHandler {
    static handle(err, req, res, next) {
        if (err.status && err.message) {
            return res.status(err.status).json({ error: err.message });
        }

        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        if (err.name === 'MongoError') {
            return res.status(500).json({ error: 'Database error' });
        }

        res.status(500).json({ error: 'Internal Server Error' });
    }
}
