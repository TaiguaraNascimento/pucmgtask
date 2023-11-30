import mongoose from "mongoose";

const { Schema } = mongoose;

const usuarioSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.models.Usuario ||
  mongoose.model("Usuario", usuarioSchema);
