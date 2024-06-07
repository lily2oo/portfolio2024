"use client";
import "../globals.css";
import styles from "./about.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const About = () => {
  const [visibleQuestionIndex, setVisibleQuestionIndex] = useState<
    number | null
  >(null);
  const toggleAnswerVisibility = (index: number) => {
    setVisibleQuestionIndex(visibleQuestionIndex === index ? null : index);
  };

  useEffect(() => {
    console.log(visibleQuestionIndex);
  }, [visibleQuestionIndex]);
  const questions = [
    "自分のスキルと経験をどう思う？",
    "インターンして良かったことは？",
    "デザインを選んだ理由は？",
    "夢はありますか？",
  ];

  const answers = [
    "迷う様は、学生らしく、そして自分らしいと思います。\n迷って、可能性を潰していったからこそ、今デザインが良い、と心から言えます。\n後悔も当然あります。特化型の人に劣る瞬間があるからです。でも、良いんです。\nポケモンでも最初の1匹(ぼくはヒコザル)特化で育てた方が攻略は早いけど、\nそれだけが遊び方じゃない。僕の人生の遊び方は、僕が決めます。",
    "大海を知れたことです。\nあとは、特に教育業的な立場を知れたのは良い経験だったと思います。\n「なんとなく」でもできちゃうことを、ちゃんと教えるベースで学ぶ。\n自分なりに噛み砕くみたいな思考が身についたことは収穫でした。\n新しいことを習得するスキルには自信があります。",
    "「ついついとやってしまう」のは、デザインだったからです。\n一番没頭することができるのも、デザインでした。\nまた、全部のクリエイティブに共通する根幹の技術だと感じたからです。\nデザインがなくちゃ、映像もコピーもCGもコーディングも魅力的にならない。\nだからデザインです。",
    "最近、夢のような、目標なような、そんなものができました。\nたくさん仕事をして、経験を積んで、\n手の届く人の幸せのためにそれを使っていきたいです。。\n具体的には、住んできた三鷹のちょっとくすんだ商店街を、\n自分のデザインで明るくする。\nそんなことができたら本当に最高だなって思います。",
  ];

  return (
    <>
      <section className={styles.header}>
        {/* <div className={styles.sealContainer}>
          <Image
            className={styles.seal1}
            src="/about/header/creative.png"
            alt={""}
            height={441 * 0.8}
            width={667 * 0.8}
            quality={100}
          />
          <Image
            className={styles.seal2}
            src="/about/header/wakuwaku_black.png"
            alt={""}
            height={99 * 0.8}
            width={120 * 0.8}
            quality={100}
          />
          <Image
            className={styles.seal3}
            src="/about/header/wakuwaku.png"
            alt={""}
            height={163 * 0.8}
            width={199 * 0.8}
            quality={100}
          />
          <Image
            className={styles.seal4}
            src="/about/header/challenge.png"
            alt={""}
            height={130 * 0.8}
            width={131 * 0.8}
            quality={100}
          />
          <Image
            src="/about/header/suko.png"
            alt={""}
            height={776 * 0.8}
            width={383 * 0.8}
            quality={100}
          />
        </div> */}
        <div className={styles.name}>
          <svg
            viewBox="0 0 1272 284"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1263.3 50.4924L1252.82 38.3537L1268.74 39.4635L1269.47 28.8312L1253.55 27.7221L1265.58 17.159L1258.65 9.12412L1246.61 19.6872L1247.71 3.63097L1237.16 2.90197L1236.07 18.9582L1225.59 6.81947L1217.62 13.8079L1228.1 25.9467L1212.17 24.8376L1211.45 35.4594L1227.38 36.5782L1215.34 47.1413L1222.27 55.1762L1234.31 44.6034L1233.21 60.6596L1243.75 61.3991L1244.86 45.3421L1255.34 57.4809L1263.3 50.4924Z"
              fill="white"
            />
            <path
              d="M1136.02 235.591C1091.97 235.591 1061.14 188.436 1061.14 140.764C1061.14 91.7955 1092.49 43.3455 1137.31 43.3455C1177.73 43.3455 1211.93 84.5409 1211.93 139.986C1211.93 192.841 1178.25 235.591 1136.02 235.591ZM1136.02 229.632C1167.63 229.632 1189.39 201.391 1189.39 141.541C1189.39 75.9909 1165.3 49.0455 1136.02 49.0455C1107.26 49.0455 1083.94 75.2136 1083.94 139.986C1083.94 202.427 1105.45 229.632 1136.02 229.632Z"
              fill="white"
            />
            <path
              d="M1069.52 232.223V233.518C1065.11 233.259 1054.75 233 1047.49 233C1039.98 233 1031.69 233.259 1027.02 233.518V232.223C1030.91 231.705 1032.47 230.409 1032.47 228.336C1032.47 223.673 1025.99 212.791 1016.66 197.505L981.943 141.282V197.505C981.943 229.114 982.979 230.409 992.306 232.223V233.518C987.902 233.259 979.611 233 972.356 233C964.843 233 957.07 233.259 952.406 233.518V232.223C961.734 230.409 962.77 229.114 962.77 196.986V81.1727C962.77 49.0454 961.734 47.75 952.406 45.9363V44.6409C957.07 44.9 964.584 45.1591 972.356 45.1591C979.611 45.1591 987.902 44.9 992.306 44.6409V45.9363C982.979 47.75 981.943 49.0454 981.943 80.6545V135.841C1013.81 94.1272 1033.24 58.3727 1033.24 51.1182C1033.24 48.0091 1031.43 46.4545 1026.51 45.9363V44.6409C1032.21 45.1591 1040.76 45.1591 1048.27 45.1591C1055.01 45.1591 1061.48 44.9 1065.37 44.6409V45.9363C1051.12 49.0454 1036.87 67.9591 996.452 130.141L1040.24 198.023C1054.23 219.786 1060.19 231.964 1069.52 232.223Z"
              fill="white"
            />
            <path
              d="M916.695 163.045V108.895C916.695 50.8591 915.917 51.6363 901.149 46.1954V44.9C905.554 45.1591 912.29 45.4181 920.063 45.4181C927.058 45.4181 932.499 45.1591 936.904 44.9V46.1954C923.949 51.1182 923.69 51.6363 923.69 113.041V162.009C923.69 198.541 918.249 215.382 907.108 226.782C898.299 235.591 886.64 237.145 874.722 237.145C851.144 237.145 837.154 231.186 828.863 219.527C820.313 207.35 817.981 189.214 817.981 165.895V85.5772C817.981 49.3045 817.463 48.0091 807.617 45.9363V44.6409C812.281 44.9 819.794 45.1591 827.567 45.1591C834.822 45.1591 844.149 44.9 848.554 44.6409V45.9363C838.19 47.75 837.154 49.5636 837.154 85.0591V163.045C837.154 183.255 838.449 198.541 842.335 208.645C848.294 224.45 859.176 228.855 875.499 228.855C886.381 228.855 895.449 227.041 901.926 221.082C913.585 209.941 916.695 189.214 916.695 163.045Z"
              fill="white"
            />
            <path
              d="M714.113 189.991H715.668C715.668 189.991 715.409 192.841 715.409 195.432C715.409 214.086 728.881 229.114 748.572 229.114C763.859 229.114 776.295 217.973 776.295 194.136C776.295 142.318 712.818 143.614 712.818 87.1318C712.818 59.15 729.918 40.7545 753.236 40.7545C766.968 40.7545 774.74 44.9 781.995 44.9C783.549 44.9 785.104 44.9 786.399 44.6409C785.881 50.6 785.881 54.7454 785.881 61.7409C785.881 65.6273 785.881 72.1045 786.14 75.9909H784.586C780.699 55.7818 769.299 46.1954 753.495 46.1954C740.281 46.1954 728.622 55.0045 728.622 75.4727C728.622 125.218 792.099 123.923 792.099 182.995C792.099 215.382 774.222 235.591 747.277 235.591C733.545 235.591 727.068 230.668 717.222 230.668C715.409 230.668 714.113 230.668 712.299 230.927C712.559 229.632 712.559 226.523 712.559 224.191C712.559 215.641 711.781 210.718 711.781 203.982C711.781 198.541 712.299 193.618 714.113 189.991Z"
              fill="white"
            />
            <path
              d="M639.595 232.223V233.518C635.191 233.259 626.9 233 619.645 233C611.873 233 604.359 233.259 599.695 233.518V232.223C607.986 230.668 610.059 229.373 610.059 208.645V69.5136C610.059 48.7863 607.986 47.4909 599.695 45.9363V44.6409C604.359 44.9 611.873 45.1591 619.645 45.1591C626.9 45.1591 635.191 44.9 639.595 44.6409V45.9363C631.304 47.4909 629.232 48.7863 629.232 69.5136V208.645C629.232 229.373 631.304 230.668 639.595 232.223Z"
              fill="white"
            />
            <path
              d="M580.234 199.577H581.789C581.53 218.75 580.752 222.377 580.752 233.777C573.239 233.259 559.507 233 534.375 233H514.425C505.098 233 495.252 233.259 492.143 233.518V232.223C503.284 229.632 503.543 224.709 503.543 196.986V81.1727C503.543 49.0454 502.248 48.2681 491.625 45.9363V44.6409C495.77 44.9 504.839 45.1591 517.534 45.1591C547.07 45.1591 568.834 45.1591 579.975 44.6409C579.975 46.1954 580.234 51.3772 580.234 55.5227C580.234 61.2227 579.975 71.3272 579.457 76.7681H577.902C574.534 53.7091 566.761 52.9318 539.039 52.9318C529.452 52.9318 525.566 53.45 522.716 54.4863V131.695H537.484C557.434 131.695 561.58 128.068 564.948 111.745H566.502C566.243 119.777 565.984 125.218 565.984 135.841C565.984 149.573 566.243 153.459 566.502 162.268H564.948C561.32 139.986 554.325 139.468 522.716 139.468V223.673C525.048 224.709 531.007 225.227 539.039 225.227C567.28 225.227 574.793 224.968 580.234 199.577Z"
              fill="white"
            />
            <path
              d="M424.787 232.223V233.518C420.382 233.259 412.091 233 404.837 233C397.064 233 389.291 233.259 384.887 233.518V232.223C393.178 230.668 395.25 229.373 395.25 208.645V69.5136C395.25 48.7863 392.4 47.4909 384.109 45.9363V44.6409C388.773 44.9 396.805 45.1591 403.023 45.1591C414.423 45.1591 420.9 44.6409 428.155 44.6409C464.168 44.6409 479.973 67.1818 479.973 95.6818C479.973 121.591 464.428 147.5 437.223 147.5C430.228 147.5 423.75 145.686 419.346 141.541L420.382 139.468C424.268 142.059 429.45 143.095 433.078 143.095C450.955 143.095 458.987 124.441 458.987 100.086C458.987 70.0318 447.587 50.6 427.378 50.6C422.973 50.6 418.309 51.3772 414.423 53.1909V208.645C414.423 229.373 416.496 230.668 424.787 232.223Z"
              fill="white"
            />
            <path
              d="M372.681 232.223V233.518C368.536 233.259 360.763 233 353.768 233C345.995 233 337.445 233.259 332.781 233.518V232.223C339.259 231.186 341.85 229.373 341.85 223.155C341.85 220.823 341.331 215.123 340.554 209.682L325.268 94.1273L279.668 230.927H277.854L230.44 89.2045L216.709 198.023C215.672 206.314 215.154 211.236 215.154 216.159C215.154 225.486 218.004 230.15 226.036 232.223V233.518C221.372 233.259 213.081 233 205.568 233C198.572 233 196.24 233.259 191.836 233.518V232.223C202.2 228.595 205.568 219.786 209.195 195.173L231.218 40.7545H233.55L285.109 193.618L334.854 40.7545H337.186L360.504 212.791C362.318 226.005 364.65 229.632 372.681 232.223Z"
              fill="white"
            />
            <path
              d="M171.296 163.045V108.895C171.296 50.8591 170.519 51.6363 155.751 46.1954V44.9C160.155 45.1591 166.891 45.4181 174.664 45.4181C181.66 45.4181 187.101 45.1591 191.505 44.9V46.1954C178.551 51.1182 178.291 51.6363 178.291 113.041V162.009C178.291 198.541 172.851 215.382 161.71 226.782C152.901 235.591 141.241 237.145 129.323 237.145C105.746 237.145 91.7551 231.186 83.4642 219.527C74.9142 207.35 72.5824 189.214 72.5824 165.895V85.5772C72.5824 49.3045 72.0642 48.0091 62.2188 45.9363V44.6409C66.8824 44.9 74.396 45.1591 82.1687 45.1591C89.4233 45.1591 98.7506 44.9 103.155 44.6409V45.9363C92.7915 47.75 91.7551 49.5636 91.7551 85.0591V163.045C91.7551 183.255 93.0506 198.541 96.9369 208.645C102.896 224.45 113.778 228.855 130.101 228.855C140.982 228.855 150.051 227.041 156.528 221.082C168.187 209.941 171.296 189.214 171.296 163.045Z"
              fill="white"
            />
            <path
              d="M0.955682 284.559L0.4375 283.264C13.6511 279.895 15.2057 274.195 15.2057 250.877V69.5136C15.2057 48.7863 11.3193 47.4909 3.02841 45.9363V44.6409C7.69205 44.9 17.2784 45.1591 24.792 45.1591C32.0466 45.1591 41.633 44.9 46.0375 44.6409V45.9363C37.7466 48.0091 34.3784 48.7863 34.3784 69.5136V228.336C34.3784 259.427 27.9011 280.155 0.955682 284.559Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
      <section className={styles.intro}>
        <div className={styles.nameContainer}>
          <p className={styles.desc}>
            クリエイターになることを諦められず、浪人(修行)期間を経て、デジタルハリウッド大学に入学。環境が人を作るという考えのもと、自分を成長させるためインターンを通してジャンル問わず様々な技術を学んでいる。
            <br />
            趣味は運動とサウナとカメラ。
            <br />
            成長欲求強めの負けず嫌い🔥
          </p>
          <p className={styles.caption}>Designer / Frontend Engineer</p>
          <h2 className={styles.nameEn}>Jumpei Suko</h2>
          <p className={styles.name}>須古 純平</p>
        </div>
        <div className={styles.positionContainer}>
          <div className={styles.hContainer}>
            <h3 className={styles.headingEn}>Position</h3>
            <p className={styles.heading}>やってきた3つの立場</p>
          </div>
          <div className={styles.flex}>
            <div className={styles.position}>
              <div className={styles.titleContainer}>
                <div className={styles.svg}>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4139 12.8976L11.0063 9.67952L15.0243 10.2781L15.4316 7.66096L11.4111 7.06241L14.6878 4.69248L13.0951 2.56245L9.81831 4.93239L10.4317 0.980073L7.76944 0.585083L7.15607 4.5374L4.74844 1.31933L2.57956 2.88717L4.98719 6.10524L0.966703 5.50669L0.561921 8.12138L4.5824 8.72234L1.30565 11.0923L2.89842 13.2223L6.17518 10.8499L5.56182 14.8023L8.2216 15.1997L8.83743 11.2474L11.2451 14.4654L13.4139 12.8976Z"
                      fill="#C4ECDB"
                    />
                  </svg>
                </div>
                <h4 className={styles.title}>Creator</h4>
              </div>
              <p className={styles.caption}>
                クリエイターになる、と決めたので
                <br />
                日々アイデアを形にしています。
              </p>
              <Image
                src="/about/intro/position1.png"
                alt={""}
                height={98}
                width={288}
                quality={100}
                style={{ display: "block" }}
              />
            </div>
            <div className={styles.position}>
              <div className={styles.titleContainer}>
                <div className={styles.svg}>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4139 12.8976L11.0063 9.67952L15.0243 10.2781L15.4316 7.66096L11.4111 7.06241L14.6878 4.69248L13.0951 2.56245L9.81831 4.93239L10.4317 0.980073L7.76944 0.585083L7.15607 4.5374L4.74844 1.31933L2.57956 2.88717L4.98719 6.10524L0.966703 5.50669L0.561921 8.12138L4.5824 8.72234L1.30565 11.0923L2.89842 13.2223L6.17518 10.8499L5.56182 14.8023L8.2216 15.1997L8.83743 11.2474L11.2451 14.4654L13.4139 12.8976Z"
                      fill="#C4ECDB"
                    />
                  </svg>
                </div>
                <h4 className={styles.title}>Teacher</h4>
              </div>
              <p className={styles.caption}>
                培った技術を還元し、自身の成長を加速するため、
                <br />
                主に中高大学生、中学の先生等、200人以上の方に
                <br />
                プログラミング教育を届けています。
              </p>
              <Image
                src="/about/intro/position2.png"
                alt={""}
                height={123 * 0.8}
                width={360 * 0.8}
                quality={100}
                style={{ display: "block" }}
              />
            </div>
            <div className={styles.position}>
              <div className={styles.titleContainer}>
                <div className={styles.svg}>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4139 12.8976L11.0063 9.67952L15.0243 10.2781L15.4316 7.66096L11.4111 7.06241L14.6878 4.69248L13.0951 2.56245L9.81831 4.93239L10.4317 0.980073L7.76944 0.585083L7.15607 4.5374L4.74844 1.31933L2.57956 2.88717L4.98719 6.10524L0.966703 5.50669L0.561921 8.12138L4.5824 8.72234L1.30565 11.0923L2.89842 13.2223L6.17518 10.8499L5.56182 14.8023L8.2216 15.1997L8.83743 11.2474L11.2451 14.4654L13.4139 12.8976Z"
                      fill="#C4ECDB"
                    />
                  </svg>
                </div>
                <h4 className={styles.title}>Entertainer</h4>
              </div>
              <p className={styles.caption}>
                誰かを喜ばせるため、「おててさっか」など、
                <br />
                ハッピーになるような企画や作品を作っています。
              </p>
              <Image
                src="/about/intro/position3.png"
                alt={""}
                height={123 * 0.8}
                width={360 * 0.8}
                quality={100}
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.carrer}>
        <h3 className={styles.headingEn}>Career</h3>
        <div className={styles.line}>
          <div className={styles.flex}>
            <div className={styles.relative}>
              <div className={styles.rect}></div>
              <div className={styles.textContainer}>
                <p className={styles.year}>2024</p>
              </div>
              <div className={`${styles.workplace} ${styles.workplace1}`}>
                <div className={styles.jobContainer}>
                  <a
                    className={styles.place}
                    href="https://baton8.com/"
                    target="_blank"
                  >
                    Baton
                  </a>
                  <p className={styles.job}>AI調査&amp;開発業務</p>
                </div>
                <p className={styles.period}>2024.01 - now</p>
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.rect}></div>
              <div className={styles.textContainer}>
                <p className={styles.year}>2023</p>
              </div>
              <div className={`${styles.workplace} ${styles.workplace2}`}>
                <div className={styles.jobContainer}>
                  <a
                    className={styles.place}
                    href="https://www.uzabase.com/jp/"
                    target="_blank"
                  >
                    Uzabase
                  </a>
                  <p className={styles.job}>UIデザイナー</p>
                </div>
                <p className={styles.period}>
                  2023.08(2days) / 2023.11 - 2024.03
                </p>
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.rect}></div>
              <div className={styles.textContainer}>
                <p className={styles.year}>2022</p>
              </div>
              <div className={`${styles.workplace} ${styles.workplace3}`}>
                <div className={styles.jobContainer}>
                  <a
                    className={styles.place}
                    href="https://corp.otetesakka.com/"
                    target="_blank"
                  >
                    おててさっか
                  </a>
                  <p className={styles.job}>イベント設立</p>
                </div>
                <p className={styles.period}>2022.01 - now</p>
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.rect}></div>
              <div className={styles.textContainer}>
                <p className={styles.text}>デジハリ入学</p>
                <p className={styles.year}>2021</p>
              </div>
              <div className={`${styles.workplace} ${styles.workplace4}`}>
                <div className={styles.jobContainer}>
                  <a
                    className={styles.place}
                    href="https://life-is-tech.com/"
                    target="_blank"
                  >
                    Life is Tech!
                  </a>
                  <p className={styles.job}>メンター</p>
                </div>
                <p className={styles.period}>2021.04 - now</p>
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.rect}></div>
              <div className={styles.textContainer}>
                <p className={styles.text}>浪人</p>
                <p className={styles.year}>2020</p>
              </div>
              <div className={`${styles.workplace} ${styles.workplace5}`}>
                <div className={styles.jobContainer}>
                  <a
                    className={styles.place}
                    href="https://www.hallo.jp/"
                    target="_blank"
                  >
                    HALLO
                  </a>
                  <p className={styles.job}>アルバイト</p>
                </div>
                <p className={styles.period}>2020.05 - 2021.05</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.skills}>
        <div className={styles.hContainer}>
          <p className={styles.heading}>
            気づいたら
            <br />
            なんでも屋さんでした。
          </p>
          <h3 className={styles.headingEn}>Skills</h3>
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.skill}>
            <div className={styles.relative}>
              <h4 className={styles.title}>Design</h4>
              <div className={styles.svg}>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4139 12.8976L11.0063 9.67952L15.0243 10.2781L15.4316 7.66096L11.4111 7.06241L14.6878 4.69248L13.0951 2.56245L9.81831 4.93239L10.4317 0.980073L7.76944 0.585083L7.15607 4.5374L4.74844 1.31933L2.57956 2.88717L4.98719 6.10524L0.966703 5.50669L0.561921 8.12138L4.5824 8.72234L1.30565 11.0923L2.89842 13.2223L6.17518 10.8499L5.56182 14.8023L8.2216 15.1997L8.83743 11.2474L11.2451 14.4654L13.4139 12.8976Z"
                    fill="#C4ECDB"
                  />
                </svg>
              </div>
            </div>
            <p className={styles.desc}>
              Adobe Illustrator, Photoshop, Lightroom
              <br />
              Figma
            </p>
          </div>
          <div className={styles.skill}>
            <div className={styles.relative}>
              <h4 className={styles.title}>Engineering</h4>
              <div className={styles.svg}>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4139 12.8976L11.0063 9.67952L15.0243 10.2781L15.4316 7.66096L11.4111 7.06241L14.6878 4.69248L13.0951 2.56245L9.81831 4.93239L10.4317 0.980073L7.76944 0.585083L7.15607 4.5374L4.74844 1.31933L2.57956 2.88717L4.98719 6.10524L0.966703 5.50669L0.561921 8.12138L4.5824 8.72234L1.30565 11.0923L2.89842 13.2223L6.17518 10.8499L5.56182 14.8023L8.2216 15.1997L8.83743 11.2474L11.2451 14.4654L13.4139 12.8976Z"
                    fill="#C4ECDB"
                  />
                </svg>
              </div>
            </div>
            <p className={styles.desc}>
              Frontend (Next.js, Typescript, Emotion etc... )<br />
              Backend (PHP, Next.js+Typescript)
              <br />
              App (Flutter)
            </p>
          </div>
          <div className={styles.skill}>
            <div className={styles.relative}>
              <h4 className={styles.title}>Movie</h4>
              <div className={styles.svg}>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4139 12.8976L11.0063 9.67952L15.0243 10.2781L15.4316 7.66096L11.4111 7.06241L14.6878 4.69248L13.0951 2.56245L9.81831 4.93239L10.4317 0.980073L7.76944 0.585083L7.15607 4.5374L4.74844 1.31933L2.57956 2.88717L4.98719 6.10524L0.966703 5.50669L0.561921 8.12138L4.5824 8.72234L1.30565 11.0923L2.89842 13.2223L6.17518 10.8499L5.56182 14.8023L8.2216 15.1997L8.83743 11.2474L11.2451 14.4654L13.4139 12.8976Z"
                    fill="#C4ECDB"
                  />
                </svg>
              </div>
            </div>
            <p className={styles.desc}>
              Adobe AfterEffects, PremierePro
              <br />
              DaVinci Resolve
            </p>
          </div>
          <div className={styles.skill}>
            <div className={styles.relative}>
              <h4 className={styles.title}>3DCG</h4>
              <div className={styles.svg}>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4139 12.8976L11.0063 9.67952L15.0243 10.2781L15.4316 7.66096L11.4111 7.06241L14.6878 4.69248L13.0951 2.56245L9.81831 4.93239L10.4317 0.980073L7.76944 0.585083L7.15607 4.5374L4.74844 1.31933L2.57956 2.88717L4.98719 6.10524L0.966703 5.50669L0.561921 8.12138L4.5824 8.72234L1.30565 11.0923L2.89842 13.2223L6.17518 10.8499L5.56182 14.8023L8.2216 15.1997L8.83743 11.2474L11.2451 14.4654L13.4139 12.8976Z"
                    fill="#C4ECDB"
                  />
                </svg>
              </div>
            </div>
            <p className={styles.desc}>Blender</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.relative}>
              <h4 className={styles.title}>Writing</h4>
              <div className={styles.svg}>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4139 12.8976L11.0063 9.67952L15.0243 10.2781L15.4316 7.66096L11.4111 7.06241L14.6878 4.69248L13.0951 2.56245L9.81831 4.93239L10.4317 0.980073L7.76944 0.585083L7.15607 4.5374L4.74844 1.31933L2.57956 2.88717L4.98719 6.10524L0.966703 5.50669L0.561921 8.12138L4.5824 8.72234L1.30565 11.0923L2.89842 13.2223L6.17518 10.8499L5.56182 14.8023L8.2216 15.1997L8.83743 11.2474L11.2451 14.4654L13.4139 12.8976Z"
                    fill="#C4ECDB"
                  />
                </svg>
              </div>
            </div>
            <p className={styles.desc}>Copy Writing, Novel, Scenario</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.relative}>
              <h4 className={styles.title}>Planning</h4>
              <div className={styles.svg}>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4139 12.8976L11.0063 9.67952L15.0243 10.2781L15.4316 7.66096L11.4111 7.06241L14.6878 4.69248L13.0951 2.56245L9.81831 4.93239L10.4317 0.980073L7.76944 0.585083L7.15607 4.5374L4.74844 1.31933L2.57956 2.88717L4.98719 6.10524L0.966703 5.50669L0.561921 8.12138L4.5824 8.72234L1.30565 11.0923L2.89842 13.2223L6.17518 10.8499L5.56182 14.8023L8.2216 15.1997L8.83743 11.2474L11.2451 14.4654L13.4139 12.8976Z"
                    fill="#C4ECDB"
                  />
                </svg>
              </div>
            </div>
            <p className={styles.desc}>
              Event Planning, Presentation, Advertising
            </p>
          </div>
        </div>
      </section>
      <section className={styles.qa}>
        <div className={styles.qaContainer}>
          <h3 className={styles.headingEn}>Q&A</h3>
          {questions.map((question, index) => (
            <div
              className={`${styles.qaContent} ${
                visibleQuestionIndex === index ? styles.wide : null
              }`}
              onMouseEnter={() => {
                toggleAnswerVisibility(index);
              }}
              onMouseLeave={() => {
                toggleAnswerVisibility(index);
              }}
              key={index}
            >
              <h4 className={styles.title}>
                <p className={styles.question}>{question}</p>
                <div className={styles.button}>
                  {visibleQuestionIndex === index ? "-" : "+"}
                </div>
              </h4>
              <div
                className={`${styles.answer} ${
                  visibleQuestionIndex === index ? styles.visible : null
                }`}
              >
                {answers[index].split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.future}>
        <div className={styles.hContainer}>
          <h3 className={styles.headingEn}>Future</h3>
          <p className={styles.heading}>なりたいデザイナー像</p>
        </div>
        <div className={styles.container}>
          <p className={styles.title}>自分へのあり方</p>
          <div className={styles.policyContainer}>
            <div className={styles.policy}>
              <div className={styles.relative}>
                <h4 className={styles.heading}>今</h4>
                <p className={styles.number}>01.</p>
              </div>
              <p className={styles.desc}>
                あれやらなきゃとか、あの人を超えたいとか
                <br />
                焦って未来を考えがちです。
                <br />
                だからこそ、意識して、今を大切にします。
              </p>
              <p className={styles.example}>ex. 瞑想、サウナ</p>
            </div>
            <div className={styles.policy}>
              <div className={styles.relative}>
                <h4 className={styles.heading}>健康</h4>
                <p className={styles.number}>02.</p>
              </div>
              <p className={styles.desc}>
                良いクリエイティブには栄養が必要です。
                <br />
                健康な体と生活習慣は、健康な精神を作ります。
                <br />
                健康性が、私のクリエイティブの栄養です。
              </p>
              <p className={styles.example}>
                ex.ジム通い, 早寝早起き, 栄養的な食事
              </p>
            </div>
            <div className={styles.policy}>
              <div className={styles.relative}>
                <h4 className={styles.heading}>Be enjoying.</h4>
                <p className={styles.number}>03.</p>
              </div>
              <p className={styles.desc}>
                楽しいは最高のモチベーションです。
                <br />
                そして楽しんでいる人は見ていて気持ちが良いものです。
                <br />
                自分と周りのために、まずは楽しんで仕事を行います。
                <br />
                というか勝手にもう楽しんでいます。
              </p>
              <p className={styles.example}>ex. ワクワクの赴くまま🏃‍♀️</p>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <p className={styles.title}>他人へのあり方</p>
          <div className={styles.policyContainer}>
            <div className={styles.policy}>
              <div className={styles.relative}>
                <h4 className={styles.heading}>一緒に</h4>
                <p className={styles.number}>01.</p>
              </div>
              <p className={styles.desc}>
                仕事しよう！と言われるデザイナーを目指します。
                <br />
                仲間にも、クライアントにも。
                <br />
                謙虚に。
              </p>
            </div>
            <div className={styles.policy}>
              <div className={styles.relative}>
                <h4 className={styles.heading}>当たり前のことを。</h4>
                <p className={styles.number}>02.</p>
              </div>
              <p className={styles.desc}>
                一緒に働いてくれる人に敬意を。
                <br />
                デザインができる環境に感謝を。
                <br />
                仕事を依頼してくれる人に恩返しを。
                <br />
                人を大切にすることを忘れないようにしたいです。
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contact}>
        <a href="mailto:lily2oo.rec@gmail.com" className={styles.caption}>Work with Me!</a>
      </section>
    </>
  );
};
export default About;
