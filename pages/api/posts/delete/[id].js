import db from '../../../../libs/db'

export default async function handler(req, res) {
    if (req.method !== 'DELETE') return res.status(405).end();

    const { id } = req.query;

    const deletedRow = await db('post').where({ id }).del();

    res.status(200)
    res.json({
        message: 'Deleted post successfully',
    })
}