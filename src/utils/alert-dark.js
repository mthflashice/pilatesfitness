import Swal from "sweetalert2";

export async function confirmarAgendamentoDark(
  selectedService,
  selectedPackage,
  selectedDate,
  selectedTime,
  selectedPrice
) {
  if (!selectedDate || !selectedTime) {
    await Swal.fire({
      icon: "warning",
      title: "⚠️ Atenção",
      text: "Por favor, selecione a data e o horário antes de confirmar.",
      confirmButtonColor: "#00B050", // Verde bandeira
      background: "#111",
      color: "#fff",
      confirmButtonText: "Entendi",
      customClass: {
        popup: "rounded-lg shadow-lg border border-gray-700",
      },
    });
    return false;
  }

  const result = await Swal.fire({
    title: "Confirmar agendamento?",
    html: `
      <div style="text-align: left; font-size: 1rem; color: #fff;">
        <p><b>Serviço:</b> ${selectedService}</p>
        ${selectedPackage ? `<p><b>Plano:</b> ${selectedPackage}</p>` : ""}
        ${selectedPrice ? `<p><b>Valor:</b> ${selectedPrice}</p>` : ""}
        <p><b>Data:</b> ${selectedDate}</p>
        <p><b>Horário:</b> ${selectedTime}</p>
      </div>
    `,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#00B050",
    cancelButtonColor: "#333",
    background: "#121212",
    color: "#fff",
    customClass: {
      popup: "rounded-xl shadow-2xl border border-gray-800",
      confirmButton: "rounded-md px-4 py-2 font-semibold",
      cancelButton: "rounded-md px-4 py-2 font-semibold",
    },
  });

  if (result.isConfirmed) {
    await Swal.fire({
      icon: "success",
      title: "✅ Agendamento confirmado!",
      text: "Você será redirecionado para o WhatsApp.",
      confirmButtonColor: "#00B050",
      background: "#111",
      color: "#fff",
      timer: 2200,
      showConfirmButton: false,
    });
    return true;
  }

  return false;
}
