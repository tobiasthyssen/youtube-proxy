const input = document.querySelector("#url-input")
const ytframe = document.querySelector("#video-frame")


if (input) {
  input.oninput = function() {
    let url = new URL(input.value)
    
    if (url.host === "consent.youtube.com") {
      url = new URL(url.searchParams.get("continue"))
    }
    
    let ytid = url.searchParams.get("v")

    ytframe.src = "https://www.youtube.com/embed/" + ytid
  };
}
