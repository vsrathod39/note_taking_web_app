import("../styles/index.css");
import logo_icon from "../images/brand_logo.png";
import logout_icon from "../images/logout_icon.png";

const navbar = () => {
  const nav = document.createElement("nav");

  const div_brand = document.createElement("div");
  div_brand.classList.add("brand_icon");
  const logo = document.createElement("img");
  logo.src = logo_icon;
  const brand_name = document.createElement("p");
  brand_name.textContent = "EveryNote";
  div_brand.append(logo, brand_name);
  const div_services = document.createElement("div");
  div_services.classList.add("nav_list");
  const take_note = document.createElement("p");
  take_note.textContent = "Take Note";
  take_note.onclick = () => {
    myForm();
  };
  const show_note = document.createElement("p");
  show_note.textContent = "Show Note";
  show_note.onclick = () => {
    show_note();
  };
  div_services.append(take_note, show_note);

  const div_services_hamburger = document.createElement("div");
  div_services_hamburger.classList.add("nav_list_hamburger");
  const menu = document.createElement("p");
  menu.classList.add("menu");
  menu.textContent = "Menu";
  div_services_hamburger.append(menu);
  if (false) {
    const user_name = document.createElement("p");
    user_name.classList.add("user_name_Icon");
    user_name.textContent = "V";
    const logout = document.createElement("img");
    logout.src = logout_icon;
    div_services.append(take_note, show_note, user_name, logout);
  } else {
    const help = document.createElement("p");
    help.textContent = "Help";
    const login = document.createElement("p");
    login.textContent = "Log In";
    login.onclick = () => {
      login_form();
    };
    div_services.append(take_note, show_note, help, login);
  }
  nav.append(div_brand, div_services, div_services_hamburger);
  document.getElementsByTagName("body")[0].append(nav);
};

const hamburger_menu = () => {
  const hamburger_wrapper = document.createElement("div");
  hamburger_wrapper.classList.add("hamburger_wrapper");

  const hr1 = document.createElement("hr");
  const hr2 = document.createElement("hr");
  const hr3 = document.createElement("hr");
  const hr4 = document.createElement("hr");
  const hr5 = document.createElement("hr");
  const hr6 = document.createElement("hr");

  const user_details_hamburger = document.createElement("div");
  user_details_hamburger.classList.add("user_details_hamburger");
  const user_name_hamburger = document.createElement("p");
  user_name_hamburger.classList.add("user_name_hamburger");
  user_name_hamburger.textContent = "Vikas";
  const user_email_hamburger = document.createElement("p");
  user_email_hamburger.classList.add("user_email_hamburger");
  user_email_hamburger.textContent = "vsrathod39@gmail.com";
  user_details_hamburger.append(user_name_hamburger, user_email_hamburger);

  const take_note = document.createElement("p");
  take_note.textContent = "Take Note";
  const show_note = document.createElement("p");
  show_note.textContent = "Show Note";
  hamburger_wrapper.append(
    user_details_hamburger,
    hr1,
    take_note,
    hr2,
    show_note,
    hr3
  );

  if (false) {
    const logout_hamburger = document.createElement("p");
    logout_hamburger.classList.add("logout_hamburger");
    logout_hamburger.textContent = "Logout";
    hamburger_wrapper.append(logout_hamburger, hr4);
  } else {
    const help = document.createElement("p");
    help.textContent = "Help";
    const login_hamburger = document.createElement("p");
    login_hamburger.classList.add("login_hamburger");
    login_hamburger.textContent = "Log In/Register";
    hamburger_wrapper.append(help, hr5, login_hamburger);
  }
  document.getElementsByTagName("body")[0].append(hamburger_wrapper);
};

const fix_background = () => {
  const fix_div = document.createElement("div");
  fix_div.classList.add("fixed_background");
  document.getElementsByTagName("body")[0].append(fix_div);
};

const login_form = () => {
  const login_popup = document.createElement("div");
  login_popup.classList.add("login_signup_popup");
  const login_form = document.createElement("form");
  login_form.classList.add("login_signup_form");

  const close_div = document.createElement("div");
  close_div.classList.add("close_login_signup_form");
  const close_form = document.createElement("p");
  close_form.setAttribute("id", "close_form_login_signup");
  close_form.textContent = "Close";
  close_form.onclick = () => {
    window.location.reload();
  };
  close_div.append(close_form);

  const form_head = document.createElement("p");
  form_head.classList.add("form_head");
  form_head.textContent = "Login";

  // const full_name = document.createElement('div');
  // full_name.classList.add('full_name');
  // const first_name = document.createElement('input');
  // first_name.placeholder = 'first_name';
  // first_name.type = 'text';
  // first_name.id = 'first_name';
  // first_name.name = 'first_name';
  // const last_name = document.createElement('input');
  // last_name.placeholder = 'last_name';
  // last_name.type = 'text';
  // last_name.id = 'last_name';
  // last_name.name = 'last_name';
  // full_name.append(first_name, last_name);

  const email = document.createElement("input");
  email.placeholder = "email";
  email.type = "text";
  email.id = "email";
  email.name = "email";

  const password = document.createElement("input");
  password.placeholder = "password";
  password.type = "password";
  password.id = "password";
  password.name = "password";

  const signup_btn = document.createElement("input");
  signup_btn.type = "submit";
  signup_btn.id = "signup_btn";
  signup_btn.value = "Login";

  login_form.append(close_div, form_head, email, password, signup_btn);
  login_popup.append(login_form);

  document.getElementsByTagName("body")[0].append(login_popup);
  fix_background();
};

const signup_form = () => {
  const login_popup = document.createElement("div");
  login_popup.classList.add("login_signup_popup");
  const login_form = document.createElement("form");
  login_form.classList.add("login_signup_form");

  const close_div = document.createElement("div");
  close_div.classList.add("close_login_signup_form");
  const close_form = document.createElement("p");
  close_form.setAttribute("id", "close_form_login_signup");
  close_form.onclick = () => {
    window.location.reload();
  };
  close_div.append(close_form);
  close_form.textContent = "Close";

  const form_head = document.createElement("p");
  form_head.classList.add("form_head");
  form_head.textContent = "Sign up";

  const full_name = document.createElement("div");
  full_name.classList.add("full_name");
  const first_name = document.createElement("input");
  first_name.placeholder = "first_name";
  first_name.type = "text";
  first_name.id = "first_name";
  first_name.name = "first_name";
  const last_name = document.createElement("input");
  last_name.placeholder = "last_name";
  last_name.type = "text";
  last_name.id = "last_name";
  last_name.name = "last_name";
  full_name.append(first_name, last_name);

  const email = document.createElement("input");
  email.placeholder = "email";
  email.type = "text";
  email.id = "email";
  email.name = "email";

  const password = document.createElement("input");
  password.placeholder = "password";
  password.type = "password";
  password.id = "password";
  password.name = "password";

  const signup_btn = document.createElement("input");
  signup_btn.type = "submit";
  signup_btn.id = "signup_btn";
  signup_btn.value = "Sign Up";

  login_form.append(
    close_div,
    form_head,
    full_name,
    email,
    password,
    signup_btn
  );
  login_popup.append(login_form);

  document.getElementsByTagName("body")[0].append(login_popup);
  fix_background();
};

const body_container = () => {
  const body_container = document.createElement("div");
  body_container.setAttribute("id", "container");
  document.getElementsByTagName("body")[0].append(body_container);
};

const body_content_landing = () => {
  const container = document.createElement("div");
  container.setAttribute("id", "container_landing");
  const heding = document.createElement("p");
  heding.textContent = "Tame your work, organize your life";
  const p_text = document.createElement("p");
  p_text.textContent =
    "Remember everything and tackle any project with your notes, tasks, and schedule all in one place.";
  const signup = document.createElement("div");
  signup.classList.add("btn");
  signup.onclick = () => {
    signup_form();
  };
  const span_tag = document.createElement("span");
  signup.appendChild(span_tag);
  span_tag.textContent = "Sign up for free";
  const p_login_tag = document.createElement("p");
  p_login_tag.textContent = "Already have an account? Log in";
  p_login_tag.onclick = () => {
    login_form();
  };
  container.append(heding, p_text, p_login_tag, signup, p_login_tag);
  document.getElementById("container").append(container);
};

const myForm = () => {
  const form_container = document.createElement("div");
  form_container.setAttribute("id", "form_container");
  const form = document.createElement("form");
  form.setAttribute("id", "note_form");
  const heading = document.createElement("input");
  heading.placeholder = "Title";
  heading.type = "text";
  heading.id = "heading";
  heading.name = "heading";
  const content = document.createElement("textarea");
  content.setAttribute("id", "content");
  const note_btn = document.createElement("input");
  note_btn.type = "button";
  note_btn.value = "Save";
  note_btn.onclick = () => {
    setToLocalStorage(event);
  };
  form.append(heading, content, note_btn);
  form_container.append(form);
  document.getElementById("container").append(form_container);
};

function setToLocalStorage(e) {
  e.preventDefault();
  const heading = document.getElementById("heading");
  const content = document.getElementById("content");
  let obj = {
    heading: heading.value,
    content: content.value,
  };
  if (localStorage.getItem("noteData") === null) {
    localStorage.setItem("noteData", JSON.stringify([]));
  }
  const data = JSON.parse(localStorage.getItem("noteData"));
  data.push(obj);
  localStorage.setItem("noteData", JSON.stringify(data));
  window.location.reload();
}

const show_note = () => {
  const note_container = document.createElement("div");
  note_container.setAttribute("id", "note_container");
  if (localStorage.getItem("noteData") === null) {
    const noData = document.createElement("p");
    noData.textContent = "Nothing to show, please create one.";
    note_container.append(noData);
    document.getElementById("container").append(note_container);
    return;
  }

  const data = JSON.parse(localStorage.getItem("noteData"));
  console.log(data);
  data.forEach(({heading, content}) => {
    const note_card = document.createElement("div");
    note_card.classList.add("note_card");

    const note_header = document.createElement("div");
    note_header.classList.add("note_header");
    const title = document.createElement("p");
    title.textContent = heading;
    const delete_icon = document.createElement("p");
    delete_icon.textContent = "X";
    note_header.append(title, delete_icon);

    const note_body = document.createElement("div");
    note_body.classList.add("note_body");
    const text_content = document.createElement("p");
    text_content.textContent = content;
    note_body.append(text_content);

    const note_footer = document.createElement("div");
    note_footer.classList.add("note_footer");

    const color_box = document.createElement("div");
    color_box.classList.add("color_box");
    const label_color = document.createElement("label");
    label_color.for = "favcolor";
    label_color.textContent = "Text-Colors";
    const color_picker = document.createElement("input");
    color_picker.type = "color";
    color_picker.id = "favcolor";
    color_picker.name = "favcolor";
    color_picker.value = "#ff0000";
    color_box.append(label_color, color_picker);

    const font_box = document.createElement("div");
    font_box.classList.add("font_box");
    const label_size = document.createElement("label");
    label_size.for = "font_size";
    label_size.textContent = "Font-Size";
    const font_picker = document.createElement("select");
    font_picker.classList.add("font_size");
    const opt1 = document.createElement("option");
    opt1.value = 16;
    opt1.textContent = "16px";
    const opt2 = document.createElement("option");
    opt2.value = 18;
    opt2.textContent = "18px";
    const opt3 = document.createElement("option");
    opt3.value = 20;
    opt3.textContent = "20px";
    const opt4 = document.createElement("option");
    opt4.value = 22;
    opt4.textContent = "22px";
    font_picker.append(opt1, opt2, opt3, opt4);
    font_box.append(label_size, font_picker);
    const note_update = document.createElement("p");
    note_update.textContent = "Update";
    note_footer.append(color_box, font_box, note_update);

    note_card.append(note_header, note_body, note_footer);

    note_container.append(note_card);

    document.getElementById("container").append(note_container);
  });
};

function getFromLocalStorage() {}

export {
  navbar,
  hamburger_menu,
  body_container,
  body_content_landing,
  myForm,
  show_note,
  signup_form,
  login_form,
};
