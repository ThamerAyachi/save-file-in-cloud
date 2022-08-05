// variables
const fileInput = document.querySelector("#file");
const btn = document.querySelector(".btn");
const axios = (window as any).axios;
const form = new FormData();
const show = document.querySelector(".show");

// functions
const showImg = async (url: string) => {
  const img: any = document.createElement("img");
  img.src = url;
  show?.appendChild(img);
};

(btn as Element).addEventListener("click", async () => {
  form.append("image", (fileInput as any).files[0]);
  try {
    const res = await axios.post(
      "https://api.imgbb.com/1/upload?key=e6a735fac9ee98b1897034ee6315d69b",
      form
    );

    showImg(res.data.data.display_url);
    console.log(res);
  } catch (err) {
    console.log((err as any).response.data.error.code);
  }
});
