import { getAttendeeById } from "../../common/api/attendee";

const urlParams = new URLSearchParams(window.location.search);

window.onload = async () => {

    // 1. get attendee from DB
    const id = urlParams.get("id");
    if (!id) return;
    const attendee = await getAttendeeById({id});
    // 2. render attendee to doc
    renderToHTML(attendee);
    // 3. print & reroute to the post print url
    setTimeout(() => {
        window.print();
        reroute();
      }, 100);
};

const renderToHTML = (attendee) => {
const nameEl = document.querySelector("#name");
    if (nameEl) nameEl.innerHTML =
    attendee.first_name + " " + attendee.last_name;

    const instituteEl = document.querySelector("#institute");
    if (instituteEl) instituteEl.innerHTML = attendee.institute;
};

const reroute = function () {
  const postPrintURL = urlParams.get("post-print-url");
  if (!postPrintURL) return;
  setTimeout(() => {
    window.location = postPrintURL;
  }, 200);
};
