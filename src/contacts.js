var contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
var k = 0
var n = 200
function addContacts(k,n) {
  if (n > 50000)
    n=50000
  const fragment = document.createDocumentFragment();
  for (let i = k; i < n; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

contacts.addEventListener('scroll', function() {
  var items = Array.from(contacts.getElementsByClassName("contact"));
  const itemOffsets = items.map((item) => item.offsetTop);
  
  const topItemIndex = itemOffsets.findIndex(
    (offset) => contacts.scrollTop - offset <= -18
  );
  if (topItemIndex !== -1) {
    stickyHeader.textContent = items[topItemIndex].textContent;
  }
   
  if (topItemIndex >= n*4/5) {
    k+=200
    n+=200
    addContacts(k,n)
  }

});

addContacts(k,n);