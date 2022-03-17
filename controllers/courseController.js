const Course = require('../modals/Course')

exports.createCourse = async (req, res) => {
    const course = await Course.create(req.body)

    try {
        res.status(201).json({
            status: 'succes',
            course,
        })
        //res.send('Yeni Course Olusturuldu')
    } catch {
        res.status(400).json({
            status: 'Fail'
        })
    }
}
