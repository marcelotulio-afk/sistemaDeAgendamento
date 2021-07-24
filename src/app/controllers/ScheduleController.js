import { Op } from 'sequelize';
import { endOfDay, startOfDay, parseISO } from 'date-fns';
import User from '../models/User';
import Appointment from '../models/Appointment';


class ScheduleController{
    async index(req, res){





        const checkUser = await User.findAll({
            where: { id: req.userId, provider: true}
        })

        if(!checkUser){
            return res.status(400).json({ 
                message: 'Este usuário não é um colaborador'})
        }

                const { date} = req.query;

                const parseDate = parseISO(appointments)

                const appointments = await Appointment.findOne({
                    where: {
                        collaborator_id: req.userId,
                        cancelled_at: null,
                        date: {
                            [Op.between]: [ startOfDay(parseDate), endOfDay(parseDate)],
                        },
                    },
                    order: ['date']
                });

        return res.json(date)
    }
}


export default new ScheduleController();