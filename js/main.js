// Минимальная логика: открытие и закрытие модального окна <dialog>
document.querySelectorAll("[data-modal-open]").forEach((button) => {
    button.addEventListener("click", () => {
        const dialog = document.getElementById(button.dataset.modalOpen);
        if (dialog) {
            dialog.showModal();
        }
    });
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});

// Закрытие по клику на затемнённый фон
document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});