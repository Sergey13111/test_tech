import CompanyModel from '../models/Company.js';

export const getAll = async (req, res) => {
  try {
    const companies = await CompanyModel.find().populate('user').exec();
    res.json(companies);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить компании',
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const companyId = req.params.id;

    CompanyModel.findById(
      {
        _id: companyId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: 'Не удалось вернуть компанию',
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: 'Компания не найдена',
          });
        }

        res.json(doc);
      },
    ).populate('userId');
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить компании',
    });
  }
};


export const create = async (req, res) => {
  try {
    const doc = new CompanyModel({
      name: req.body.name,
      address: req.body.address,
      serviceOfActivity: req.body.serviceOfActivity,
      numberOfEmployees: req.body.numberOfEmployees,
      description: req.body.description,
      type: req.body.type,
      user: req.userId,
    });

    const company = await doc.save();

    res.json(company);
  } catch (err) {
    console.log(err); 
    res.status(500).json({
      message: 'Не удалось создать компанию',
    });
  }
};

export const update = async (req, res) => {
  try {
    const companyId = req.params.id;

    await CompanyModel.updateOne(
      {
        _id: companyId,
      },
      {
        name: req.body.name,
        address: req.body.address,
        serviceOfActivity: req.body.serviceOfActivity,
        numberOfEmployees: req.body.numberOfEmployees,
        description: req.body.description,
        type: req.body.type,
        userId: req.userId,
      },
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось обновить информацию компании',
    });
  }
}; 