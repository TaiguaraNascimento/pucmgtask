/* eslint-disable import/no-anonymous-default-export */
import connectMongoDB from "@/app/api/conexao/utils/utils";

import Dependentes from "../../conexao/models/models.dependentes";

connectMongoDB();

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const dependente = await Dependentes.findById(id);
        if (!dependente) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: dependente });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const dependente = await Dependentes.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!dependente) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: dependente });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedDocumento = await Dependentes.deleteOne({ _id: id });
        if (!deletedDocumento) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
