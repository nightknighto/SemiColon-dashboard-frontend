import { Button } from "react-bootstrap";
import "../styles/MyButton.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import mail from "../icons/mail.gif";
import emailfile from "../icons/email-file.gif";
import recruitement from "../icons/recruitment.gif";

const MyButton = ({ text, currentStatus, tracks, futureStatus }) => {
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure you want to send?",
      html: `<img src="${mail}" alt="Calendar" style="width: 100px; height: auto;" />`, // Adjust the size with CSS
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: "#43F431",
      cancelButtonColor: "#d33",
      denyButtonColor: "#31DFF4",
      denyButtonClass: "swal2-deny-button",
      confirmButtonClass: "swal2-confirm-button",
      cancelButtonText: "cancel",
      denyButtonText: `Show Selections`,
      // add hover effect to the deny button
      customClass: {
        denyButton: "swal2-confirm-button",
        hover: "swal2-confirm-button:hover",
      },

      confirmButtonText: "Yes, send it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let timerInterval;
        Swal.fire({
          title: "Sending...",
          timer: 4000,
          timerProgressBar: true,
          html: `<img src="${emailfile}" alt="Calendar" style="width: 100px; height: auto;" />`, // Adjust the size with CSS
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      } else if (result.isDenied) {
        const maxLength = Math.max(currentStatus.length, tracks.length);
        const tableRows = [];

        for (let i = 0; i < maxLength; i++) {
          const status = currentStatus[i] !== undefined ? currentStatus[i] : "";
          const track = tracks[i] !== undefined ? tracks[i] : "";
          const future =
            i === 0 ? (futureStatus !== undefined ? futureStatus : "----") : "";

          tableRows.push(`<tr>

                            <td>${
                              status.charAt(0).toUpperCase() + status.slice(1)
                            }</td>
                            <td>${
                              track.charAt(0).toUpperCase() + track.slice(1)
                            }</td>
                            <td>${
                              future.charAt(0).toUpperCase() + future.slice(1)
                            }</td>
                          </tr>`);
        }

        const tableHtml = `<table style="width: 100%; border-collapse: collapse;">
                            <thead>
                              <tr style="background-color: #f2f2f2;">
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Current Status</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Track</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Future Status</th>
                              </tr>
                            </thead>
                            <tbody>${tableRows.join("")}</tbody>
                          </table>`;

        Swal.fire({
          title: "Target Applicants",
          html: `<img src="${recruitement}" alt="Image" style="width: 100px; height: auto; margin-bottom: 10px;" />${tableHtml}`,
        }).then((result) => {
          handleClick();
        });
      }
    });
  };

  return (
    <Button variant="outline-primary" className="button" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default MyButton;
