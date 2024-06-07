"use client";
import "../globals.css";
import styles from "./work.module.css";
import Image from "next/image";

export default function Work1() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Portfolio</h1>
          <p className={styles.name}>@2024 Jumpei Suko</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/work1/work1.png"
            alt={""}
            height={618}
            width={1200}
            sizes="100vw"
            quality={100}
          />
        </div>
        <div className={styles.flex}>
          <div className={styles.descContainer}>
            <p className={styles.title}>Release :</p>
            <p className={styles.desc}>2024.06.31</p>
          </div>
          <div className={styles.descContainer}>
            <p className={styles.title}>Tools :</p>
            <p className={styles.desc}>Figma, Blender</p>
          </div>
          <div className={styles.descContainer}>
            <p className={styles.title}>Language :</p>
            <p className={styles.desc}>Next.js, TypeScript, R3f</p>
          </div>
        </div>
      </section>
      <section className={styles.text}>
        <div className={styles.textContainer}>
          <div className={styles.content}>
            <h4 className={styles.title}>制作経緯</h4>
            <p className={styles.desc}>
              大学3年生までに下記の2つのポートフォリオを制作しました。
              <br />
              しかし、職種に悩んでいる状態で制作したので、
              <br />
              <span className={styles.marker}>誰にも刺さらないもの</span>
              となっていました。
              <br />
              就職活動を通してwebの制作会社に行くことを決意したので、
              <br />
              改めてポートフォリオを制作し直すことにしました。
            </p>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/work1/portfolio1.png"
                alt={""}
                height={124}
                width={196}
                quality={100}
              />
              <Image
                className={styles.image}
                src="/work1/portfolio2.png"
                alt={""}
                height={124}
                width={196}
                quality={100}
              />
            </div>
          </div>
          <div className={styles.content}>
            <h4 className={styles.title}>解決すべき課題点</h4>
            <p className={styles.desc}>
              先述した通り、
              <br />
              課題点は
              <span className={styles.marker}>
                ターゲットを絞りきれていなかった
              </span>
              ことにあります。
              <br />
              今回は、とある制作会社の社長様をペルソナとして設定しました。
              <br />
              そして、単純にクオリティが低いという問題もあったので、
              <br />
              自分に作れる最高のクオリティを目指して制作を開始しました。
            </p>
            <div className={styles.imageContainer}></div>
          </div>
        </div>
      </section>
      <section className={styles.work}>
        <Image
          className={styles.image}
          src="/work1/main1.png"
          alt={""}
          height={181}
          width={1246}
          quality={100}
        />
        <Image
          className={styles.image}
          src="/work1/main2.png"
          alt={""}
          height={115}
          width={1246}
          quality={100}
        />
      </section>
      <section className={styles.text}>
        <div className={styles.textContainer}>
          <div className={styles.content}>
            <h4 className={styles.title}>制作の留意点</h4>
            <p className={styles.desc}>
              自分のスキルを100%活かせるWebで制作しました。
              <br />
              表現としては、
              <span className={styles.marker}>R3Fによる3Dと横スクロール</span>
              を採用しています。
              <br />
              サラッと見れる表現ではないので、賛否両論ある点だと思います。
              <br />
              大量のポートフォリオを捌く大手の会社では印象が良くない可能性がありますが、
              <br />
              私の目指す制作会社というターゲットから考えると、
              <br />
              じっくり見てもらえ、印象に残り、技術力を示すことができるという
              <br />
              メリットの方が大きいと考えました。
            </p>
          </div>
          <div className={styles.content}>
            <h4 className={styles.title}>テーマ</h4>
            <p className={styles.desc}>
              作品のテーマとしては、
              <br />
              とにかくど直球の、
              <span className={styles.marker}>素直なデザイン</span>
              をテーマとしました。
              <br />
              また、横スクロールの利点を活かし、紙面で読んでいるかのような印象で、
              <br />
              ストーリー性が見えてくるポートフォリオにすることを
              <br />
              意識して制作しました。
            </p>
            <div className={styles.imageContainer}></div>
          </div>
        </div>
      </section>
      <section className={styles.carrer}>
        <div className={styles.line}>
          <div className={styles.flex}>
            <h3 className={styles.title}>制作フロー</h3>
            <div className={styles.relative}>
              <div className={styles.rect}></div>
              <div className={`${styles.flow}`}>
                <p className={styles.number}>01.</p>
                <p className={styles.period}>Three.js Journey (20hours)</p>
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.rect}></div>
              <div className={`${styles.flow}`}>
                <p className={styles.number}>02.</p>
                <p className={styles.period}>R3Fを学習する (20hours)</p>
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.rect}></div>
              <div className={`${styles.flow}`}>
                <p className={styles.number}>03.</p>
                <p className={styles.period}>
                  Figmaでワイヤーフレーム (20hours)
                </p>
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.rect}></div>
              <div className={`${styles.flow}`}>
                <p className={styles.number}>04.</p>
                <p className={styles.period}>
                  R3Fと横スクをテスト実装 (10hours)
                </p>
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.rect}></div>
              <div className={`${styles.flow}`}>
                <p className={styles.number}>05.</p>
                <p className={styles.period}>Figmaでデザイン (20hours)</p>
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.rect}></div>
              <div className={`${styles.flow}`}>
                <p className={styles.number}>06.</p>
                <p className={styles.period}>実装+仕上げ (20hours)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.text}>
        <div className={styles.textContainer}>
          <div className={styles.content}>
            <h4 className={styles.title}>制作してみて</h4>
            <p className={styles.desc}>
              技術的に挑戦的な内容が多かったので、
              <br />
              時間がかかったのが反省点です。
              <br />
              ただ、その甲斐もあり、自分自身のスキルの向上と
              <br />
              最大限の表現ができたのは収穫でした。
              <br />
              胸を張れるポートフォリオに仕上がったと思います。
            </p>
          </div>
          <div className={styles.content}>
            <h4 className={styles.title}>テーマ</h4>
            <ul className={styles.desc}>
              <li className={styles.list}>レスポンシブの対応</li>
              <li className={styles.list}>作品ページの修正</li>
              <li className={styles.list}>全体的にFVのデザインの修正</li>
              <li className={styles.list}>パフォーマンスの改善</li>
              <li className={styles.list}>他の作品の追加</li>
              <li className={styles.list}>ギャラリーページの追加</li>
            </ul>
            <div className={styles.imageContainer}></div>
          </div>
        </div>
      </section>
      <section className={styles.more}>
        <a
          href="https://note.com/lily2oo/n/n1974686237b3?sub_rt=share_pw"
          target="_blank"
        >
          <div className={styles.container}>
            <Image
              className={styles.image}
              src="/work1/more1.png"
              alt={""}
              height={87}
              width={200}
              quality={100}
            />
            <div className={styles.textContainer}>
              <p className={styles.caption}>詳細な解説</p>
              <p className={styles.link}>Note</p>
            </div>
          </div>
        </a>
        <a href="https://github.com/lily2oo/portfolio2024" target="_blank">
          <div className={styles.container}>
            <Image
              className={styles.image}
              src="/work1/more2.png"
              alt={""}
              height={87}
              width={200}
              quality={100}
            />
            <div className={styles.textContainer}>
              <p className={styles.caption}>ソースコード</p>
              <p className={styles.link}>Github</p>
            </div>
          </div>
        </a>
        <a
          href="https://www.figma.com/design/ht2vxujG6sBAkiqfk5Eoax/Light?node-id=587-927"
          target="_blank"
        >
          <div className={styles.container}>
            <Image
              className={styles.image}
              src="/work1/more3.png"
              alt={""}
              height={87}
              width={200}
              quality={100}
            />
            <div className={styles.textContainer}>
              <p className={styles.caption}>デザインカンプ</p>
              <p className={styles.link}>Figma</p>
            </div>
          </div>
        </a>
      </section>
    </>
  );
}
