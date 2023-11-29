/* eslint-disable import/no-anonymous-default-export */
import connectMongoDB from "@/app/api/conexao/utils";

import Documento from "../../conexao/models/models.documentos";

connectMongoDB();

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const documento = await Documento.findById(id);
        if (!documento) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: documento });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const documento = await Documento.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!documento) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: documento });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedDocumento = await Documento.deleteOne({ _id: id });
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
