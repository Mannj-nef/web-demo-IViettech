window.addEventListener("load", function () {
  function lineEffect() {
    const lineEffect = document.querySelector(".line-effect");
    const menuItems = document.querySelectorAll(".header_item");

    [...menuItems].forEach((item) =>
      item.addEventListener("mouseenter", handelAddEffect)
    );
    [...menuItems].forEach((item) =>
      item.addEventListener("mouseleave", handelRemoveEffect)
    );

    function handelAddEffect(e) {
      const clicked = e.target;
      const left = clicked.offsetLeft;
      const width = clicked.offsetWidth;
      lineEffect.style = `width: ${width}px; left: ${left}px`;
    }

    function handelRemoveEffect() {
      lineEffect.style = "";
    }
  }

  $(".banner-wrapp").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: "linear",
  });

  function program() {
    let index = 0;
    let position = 0;
    const listCourse = document.querySelector(".list_course");
    function createCourseItem(img, link, course, times, schedule) {
      const template = `
                <div class="course_item">
                  <a href="#" class="program-link">
                    <div class="program-avata">
                      <img
                        src="${img}"
                        alt=""
                        class="program-avata__img"
                      />
                    </div>
                  </a>
                  <div class="descript">
                    <a href="${link}" class="program-link">
                      <h3 class="program-title">${course}</h3>
                    </a>
                    <div class="time-course">
                      <p class="time">${times}</p>
                      <p class="time">${schedule}</p>
                    </div>
                  </div>
                </div>
    `;

      listCourse.insertAdjacentHTML("beforeend", template);
    }
    function renderCouseItem() {
      const fullStackCouse = createCourseItem(
        "https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2015/12/LTVCN-Logo.jpg&h=230&w=230&q=100",
        "#",
        "Lập trình viên chuyên nghiệp",
        "Thời gian: 8 tháng",
        "Suất học: Tối 3-5-7"
      );
      const feCouse = createCourseItem(
        "https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2017/05/Front-End-Developer.png&h=230&w=230&q=100",
        "#",
        "Lập trình Front End-New",
        "Thời gian: 5 tháng",
        "Suất học: Tối 2-4-6"
      );
      const nodejsCouse = createCourseItem(
        "https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2021/12/Node_logo.png&h=230&w=230&q=100",
        "#",
        "Lập trình Node.js",
        "Thời gian: 5 tháng",
        "Suất học: Tối 2-4-6"
      );
      const javaCouse = createCourseItem(
        "https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2015/12/tester_logo.jpg&h=230&w=230&q=100",
        "#",
        "Kiểm thử phần mềm",
        "Thời gian: 3 tháng",
        "Suất học: Tối: 3-5-7"
      );
      const phpCouse = createCourseItem(
        "https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2013/12/Khoa-hoc-lap-trinh-PHP-Laravel.jpg&h=230&w=230&q=100",
        "#",
        "Lập Trình PHP & Laravel",
        "Thời gian: 6 tháng",
        "Suất học: Tối 3-5-7"
      );
      const iosCouse = createCourseItem(
        "https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2015/12/ios_logo.jpg&h=230&w=230&q=100",
        "#",
        "Lập trình iOS – Swift",
        "Thời gian: 4 tháng",
        "Suất học: Tối 2-4-6"
      );
      const kotlinCouse = createCourseItem(
        "https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2015/12/android_logo.jpg&h=230&w=230&q=100",
        "#",
        "Lập trình Android -Kotlin",
        "Thời gian: 4 tháng",
        "Suất học: Tối 3-5-7"
      );

      const acceleratedJava = createCourseItem(
        "https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2017/05/khoa-hoc-lap-trinh-java-cap-toc-logo.png&h=230&w=230&q=100",
        "#",
        "Lập trình Java cấp tốc",
        "Thời gian: 16 tuần",
        "Suất học: Sáng từ thứ 2-7."
      );

      const testerCouse = createCourseItem(
        "https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2013/12/logonet2-1.png&h=230&w=230&q=100",
        "#",
        "Lập Trình .NET từ A-Z – New",
        "Thời gian: 6 tháng",
        "Suất học: Tối 3-5-7"
      );
    }
    renderCouseItem();

    const prev = document.querySelector(".program-prev");
    const next = document.querySelector(".program-next");
    const courseItems = document.querySelectorAll(".course_item");

    prev.addEventListener("click", () => priving());
    next.addEventListener("click", () => nexting());

    function priving() {
      index--;
      if (index < 0) {
        index = 0;
        return;
      }
      const size = [...courseItems][index].offsetWidth;
      position = position - Math.floor(size);

      listCourse.style = `transform:translateX(-${position}px);`;
    }
    function nexting() {
      if (index >= courseItems.length - 4) {
        index = courseItems.length - 4;
        return;
      }
      index++;
      const size = [...courseItems][index].offsetWidth;
      position = position + Math.floor(size);

      listCourse.style = `transform: translateX(-${position}px);`;
    }
  }

  function dashed() {
    let index = 0;
    let position = 0;
    const listCourse_wrapp = document.querySelector(
      ".dashed-list-course_wrapp"
    );

    function createCourseItem(img, link, course, opening, times, schedule) {
      const template = `
      <div class="schooling_list-course dashed-course">
      <div class="schooling_course-item">
        <a href="${link}">
          <img
            src="${img}"
            alt=""
            class="schooling-img"
          />
        </a>

        <div class="schooling_desc">
          <p>
            <a href="${link}" class="schooling_desc-link">
            ${course}
            </a>
          </p>
          <p>${opening}</p>
          <p>${times}</p>
          <p>${schedule}</p>
        </div>
      </div>
    </div>
    `;

      listCourse_wrapp.insertAdjacentHTML("beforeend", template);
    }
    function renderCouseItem() {
      const cBasic = createCourseItem(
        "https://iviettech.vn/wp-content/uploads/2015/12/c_logo.png",
        "#",
        "Lập trình cơ bản",
        "Ngày khai giảng: 29-03",
        "hời gian: 1 tháng",
        "Suất học: Tối 3-5-7"
      );
      const interiorDesign = createCourseItem(
        "https://iviettech.vn/wp-content/uploads/2020/06/Interior-Design-icon.png",
        "#",
        "Thiết kế nội thất",
        "Ngày khai giảng: 15-03",
        "Thời gian: 6 tháng",
        "Suất học: Tối 3-5-7"
      );
      const graphicDesign = createCourseItem(
        "https://iviettech.vn/wp-content/uploads/2018/06/icons-thiet-ke-do-hoa.png",
        "#",
        "Thiết kế đồ họa",
        "Ngày khai giảng: 29-03-2022",
        "Thời gian: 6 tháng",
        "Suất học: Tối 3-5-7"
      );
      const uiUx = createCourseItem(
        "https://iviettech.vn/wp-content/uploads/2018/06/UI-UX.jpg",
        "#",
        "Thiết kế UI/UX",
        "Ngày khai giảng: 12-04-2022",
        "Thời gian: 3 tháng",
        "Suất học: Tối 3-5-7"
      );
      const colleges = createCourseItem(
        "https://iviettech.vn/wp-content/uploads/2020/06/logocaodang.png",
        "#",
        "Cao đẳng CNTT",
        "Ngày khai giảng: Nhập học đợt cuối đến 30/10",
        "Thời gian: 2.5 năm",
        "Suất học: Hàng ngày"
      );
      const animation3D = createCourseItem(
        "https://iviettech.vn/wp-content/uploads/2020/06/3d-design-course-icon.png",
        "#",
        "Thiết kế 3D & 3D Animation",
        "Ngày khai giảng: 29-10-2021",
        "Thời gian: 6 tháng",
        "Suất học: Tối 2-4-6"
      );
      const bridgeEngineer = createCourseItem(
        "https://iviettech.vn/wp-content/uploads/2019/05/logo-SE-icon.jpg",
        "#",
        "Kỹ sư cầu nối",
        "Ngày khai giảng: 12-08-2019",
        "Thời gian: 12 tháng",
        "Suất học: Sáng từ thứ 2-7."
      );
    }
    renderCouseItem();
    const prev = document.querySelector(".dashed-prev");
    const next = document.querySelector(".dashed-next");
    const dashedCourses = document.querySelectorAll(".dashed-course");

    prev.addEventListener("click", () => priving());
    next.addEventListener("click", () => nexting());

    function priving() {
      index--;
      if (index < 0) {
        index = 0;
        return;
      }
      const size = [...dashedCourses][index].clientHeight;
      console.log(size);
      position = position - Math.floor(size);
      console.log(position);

      listCourse_wrapp.style = `transform: translateY(-${position}px);`;
    }
    function nexting() {
      if (index >= [...dashedCourses].length - 4) {
        index = [...dashedCourses].length - 4;
        return;
      }
      index++;
      const size = [...dashedCourses][index].clientHeight;
      console.log(size);
      position = position + Math.floor(size);
      console.log(position);

      listCourse_wrapp.style = `transform: translateY(-${position}px);`;
    }
  }

  function block_quote() {
    const blookWrapp = document.querySelector(".blook_quote-wrapp");
    function createQuote(image, desc, member, data) {
      const template = `
        <div class="block_quote" data-member="${data}">
          <div class="member_quote">
            <div class="avata-quote">
              <img
                src="${image}"
                alt=""
                class="avata-quote_member"
              />
            </div>
          </div>

          <div class="decs_quote">
            <i class="fa-solid fa-quote-left decs_quote-icon"></i>
            <div class="desc_qoute-wrapp">
              <p class="decs-content">
                ${desc}
              </p>

              <p class="member_decs">
                Bạn
                <span
                  >${member}</span
                >
              </p>
            </div>
            <i
              class="fa-solid fa-quote-right decs_quote-icon decs_quote-icon-close"
            ></i>
          </div>
        </div>
      `;
      blookWrapp.insertAdjacentHTML("beforeend", template);
    }
    function renderQuote() {
      const teter = createQuote(
        "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJldXRpZnVsbCUyMGdpcmwlMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "Mình đã tham gia khoá học Kiểm thử phần mềm tại đây. Nhờ sự giảng dạy rất nhiệt tình, sự tư vấn và hỗ trợ tìm việc làm sau khoá học rất tận tâm của các thầy cô ở trung tâm mà mình đã tìm được việc làm phù hợp. Xin chân thành cám ơn các thầy cô và mọi người ở trung tâm nhiều.",
        "ĐẶNG THỊ MI NA_TESTER_FSOFT",
        0
      );
      const devJava = createQuote(
        "https://iviettech.vn/wp-content/uploads/2021/05/Hong_son-updated.png",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa in libero perferendis obcaecati, sunt laudantium officiis ex, consequuntur ratione quas tempore? Aliquam possimus rem consequuntur optio? Harum distinctio exercitationem voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur alias placeat non vel sint ullam minima accusamus cupiditate officia. Ipsam sunt quas cupiditate assumenda doloribus consequuntur perferendis molestias aliquid voluptates.",
        "PHẠM HỒNG SƠN_ANDROID_RIKKEI",
        1
      );
      const devFe = createQuote(
        "https://iviettech.vn/wp-content/uploads/2021/05/Thao-Truong-1.jpg",
        "Sau khi hoàn thành khoá học lập trình viên chuyên nghiệp ở trung tâm em đã nắm kiến thức trọng tâm của ngôn ngữ Java. Nhờ sự hỗ trợ tìm việc làm của thầy Việt và Cô Lan em đã tìm được công việc phù hợp với bản thân ngay sau tốt nghiệp. Em xin gửi lời cảm ơn chân thành và sâu sắc đến 2 thầy Trần Đức Linh, thầy Lê Đức Anh đã giảng dạy, support nhiệt tình trong suốt khoá học, và thầy Việt và cô Lan đã tư vấn, hỗ trợ việc làm cho em ạ. Em xin chúc trung tâm ngày càng phát triển, tạo môi trường học tập tốt cho các bạn có đam mê với ngành phần mềm.",
        "TRƯƠNG HỒ ĐÔNG THẢO_LTVCN JAVA_CÔNG TY SDT",
        2
      );
      const android = createQuote(
        "https://iviettech.vn/wp-content/uploads/2021/05/Hau-Huynh-2.png",
        `Lời đầu tiên em xin gửi lời cảm ơn đến quý thầy cô IViettech đã cất công truyền đạt kiến thức đến người học trái ngành và gần tiếp cận độ tuổi 3x như em.
        Quyết định chuyển ngành ở tuổi này cũng làm em suy nghĩ rất nhiều, nhưng nhờ có sự tư vấn và động viên của thầy cô, và với đam mê lập trình của mình, chỉ sau 8 tháng học khoá lập trình viên chuyên nghiệp JAVA, em đã nhận được cơ hội việc làm mong muốn.
        Em xin gửi lời cảm ơn đến thầy Trần Đức Linh, thầy Lê Đức Anh đã giảng dạy, hỗ trợ em trong suốt khoá học, cảm ơn thầy Việt và cô Lan đã tư vấn, hỗ trợ việc làm cho em ạ.
        Kính chúc quý thầy cô và trung tâm sẽ càng ngày càng phát triển và gặt hái nhiều thành công hơn!
        Em xin chân thành cảm ơn!!
        Chúc các bạn học viên đã và đang tham gia học tập ở IViettech sẽ thành công!!!`,
        "HUỲNH TRỌNG HẬU_LẬP TRÌNH VIÊN CHUYÊN NGHIỆP JAVA_CÔNG TY FSOFT",
        3
      );
      const devJava2 = createQuote(
        "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJldXRpZnVsbCUyMGdpcmwlMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        `Đầu tiên em xin gửi lời cảm ơn sâu sắc đến thầy Hải, thầy Tuấn đã giảng dạy nhiệt tình trong thời gian em tham gia khoá học ở Iviettech.
        Em cảm ơn thầy Việt, cô Lan đã truyền đạt kinh nghiệm, củng cố lại kiến thức, hỗ trợ em trong quá trình tìm việc.
        Thật sự may mắn khi em được biết đến iViettech, và cảm thấy rất vui khi mình đã chọn đúng nơi để giúp bản thân trao dồi thêm những kiến thức bổ ích. Trong thời gian tham gia khóa học, em hài lòng với mọi thứ tại đây, từ cơ sở vật chất, chương trình học, thái độ của các chị giáo vụ, sự hỗ trợ của cô Lan – thầy Việt, và đặt biệt là sự giảng dạy hết sức tận tâm của các thầy.
        Sau khi tốt nghiệp tại trung tâm, em đã có được một hành trang tốt để thực hiện những mục tiêu của mình trong tương lai.
        Cuối cùng, em kính chúc quý thầy cô, anh chị thật nhiều sức khỏe, trung tâm ngày càng phát triển hơn nữa! ❤️`,
        "NGUYỄN THỊ BÍCH NI – LẬP TRÌNH FRONTEND – GLOBAL DESIGN IT",
        4
      );
      const devFe2 = createQuote(
        "https://iviettech.vn/wp-content/uploads/2020/12/Thien-1.png",
        `—————- IVIETTECH ——————
        ————– GOOD CHOICE —————
        Sẽ là một lựa chọn rất hợp lý nếu:
        – Bạn muốn có một môi trường đào tạo IT chuyên nghiệp
        – Bạn muốn chuyển ngành nghề
        – Bạn muốn cải thiện thu nhập
        – Bạn muốn đảm bảo đầu ra có việc ngay
        – Bạn muốn thay đổi tương lai
        …..
        Đó là những điều tôi muốn, tôi đã chọn IViettech và tôi đã làm được.
        Các bạn thì sao?`,
        "NGUYỄN ĐỨC THIỆN – LẬP TRÌNH VIÊN CHUYÊN NGHIỆP JAVA – AXON ACTIVE",
        5
      );
    }
    renderQuote();

    const blockQuotes = document.querySelectorAll(".block_quote");
    const quoteWrapp = document.querySelector(".blook_quote-wrapp");
    const members = document.querySelectorAll(".avata-quote_alimi");
    let position = 0;

    // [...members].forEach((item) =>
    //   item.addEventListener("click", function (e) {
    //     const clicked = e.target;
    //     const data = clicked.dataset.member;
    //     const width = blockQuotes[data].offsetWidth;

    //     position = data * width;
    //     quoteWrapp.style = `transform: translateX(-${position}px);`;
    //   })
    // );

    $(".blook_quote-wrapp").slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
      cssEase: "ease",
      dots: true,
      pauseOnHover: true,
    });
  }

  function app() {
    lineEffect();
    program();
    dashed();
    // learnCalendar();
    block_quote();
  }

  app();
});
