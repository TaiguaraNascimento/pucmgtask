"use client";

import { HiOutlineTrash } from "react-icons/hi2";

import { useRouter } from "next/navigation";

import styles from "../../../ui/principal/principal.module.css";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Tem certeza de que deseja excluir?");

    if (confirmed) {
      const res = await fetch(
        `http://localhost:3000/api/contribuintes?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className={styles.Icons}>
      <HiOutlineTrash size={24} />
    </button>
  );
}
