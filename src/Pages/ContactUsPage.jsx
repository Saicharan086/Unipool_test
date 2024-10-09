import './con_css.css'
export default function ContactUsPage(){

    return (
        <div class="wb">
    <nav>
        <label>
            <input type="checkbox">
            <div class="toggle">
              <span class="topl common"></span>
              <span class="midl common"></span>
              <span class="botl common"></span>
            </div><span style="margin-left: 18px;"><span style="color: rgb(255, 208, 0);">ME</span>NU.</span>
            <div class="slide">
              <ul>
                <li><a href="#about"><span style="color: rgb(255, 208, 0);">ABO</span>UT.</a></li>
                <li><a href="#skill"><span style="color: rgb(255, 208, 0);">HO</span>ME.</a></li>
                <li><a href="#contact"><span style="color: rgb(255, 208, 0);">CONT</span>ACT.</a></li>
              </ul>
            </div>
            </label>
        <img src="uni.png" width="330px" height="100px">
        <div><a class="fancy" href="#">
        <span class="top-key"></span>
        <span class="text">Interact <span style="color: rgb(255, 208, 1);">With Us.</span></span>
        <span class="bottom-key-1"></span>
        <span class="bottom-key-2"></span>
        </a></div>
    </nav><br><br><br><br><br>
    <div class="context">
        <p class="top">Contact Us</p>
        <p class="mid">LETS GET IN TOUCH</p>
        <p class="bot">Can't Wait To Hear You</p>
    </div><br><br><br><br><br>
    <div class="au">
        <p class="head"><span style="color: rgb(255, 208, 0);">ASK</span> US</p>
    </div><br><br><br>
    <div class="frm" style="text-align: center;">
      <div class="card">
        <span class="title"><span style="color: rgb(255, 208, 0);">Leave a</span> Comment</span>
        <form class="form">
          <div class="group">
          <input placeholder="" type="text" required="">
          <label for="name">Name</label>
          </div>
      <div class="group">
          <input placeholder="" type="email" id="email" name="email" width="100px" required="">
          <label for="email">Email</label>
          </div>
      <div class="group">
          <textarea placeholder="" id="comment" name="comment" rows="5" cols="35" required=""></textarea>
          <label for="comment">Comment</label>
      </div>
          <button type="submit" class="fancy" ><span class="top-key"></span>
            <span class="text" style="font-size: 20px;">REPORT<span style="color: rgb(255, 208, 1);"> IT TO US</span></span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span></button>
        </form>
      </div>
    </div>
    )
}
