"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { useDeviceSize } from "./components/useDeviceSize";

import { SplineViewer } from "./components/Threed";
import Button from "./components/Button/Button";
import base from "../public/sponserpngs/base.png";

const LOGO_WIDTH = 432;
const LOGO_HEIGHT = 122;
const k_SCALE = 3.1;

export default function Home() {
  const { width, height } = useDeviceSize();
  const [line2Txt, setLine2Txt] = React.useState("SEEMLESS");
  return (
    <>
      <main className={styles.main}>
        <div className={styles.background}>
          <img
            className={styles.bggrid1}
            src="/grid.svg"
            alt="grid1"
            width={250}
            height={250}
          />
          <img
            className={styles.bggrid2}
            src="/grid2.svg"
            alt="grid1"
            width={240}
            height={240}
          />

          <img
            className={styles.line1}
            src="/line2.svg"
            alt="grid1"
            width={width / 1.3}
            height={height / 1.3}
          />
        </div>
        <div className={styles.header}>
          <div className={styles.nav}>
            <div className={styles.logo}>
              <Image
                priority
                autoSave="true"
                src="/eyelogo.svg"
                alt="logo"
                width={LOGO_WIDTH / k_SCALE}
                height={LOGO_HEIGHT / k_SCALE}
              />
            </div>
            <div className={styles.links}>
              <div className={styles.link}>
                <Link href="/dashboard">Dashboard</Link>
              </div>
              <div className={styles.link}>
                <Link href="https://eyepay-vercle.gitbook.io/docs/">Docs</Link>
              </div>
              <div className={styles.link}>
                <Link
                  href="https://github.com/0xVaibhav11/AstitwaFi
                "
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.hero}>
            <div className={styles.line1}>
              <h1 className={styles.title}>EMPOWERING</h1>
              <div className={styles.sparkle}>
                <Image
                  priority
                  src="/sparkle-filled.svg"
                  alt="sparkle"
                  width={67}
                  height={67}
                />
              </div>
            </div>
            <div className={styles.line2}>
              <div className={styles.eye}>
                <SplineViewer eventsTarget="global" />
              </div>
              <h1 className={styles.title}>SEEMLESS</h1>
              <div className={styles.arrow}>
                <Image
                  priority
                  src="/arrow.svg"
                  alt="arrow"
                  width={155}
                  height={88}
                />
              </div>
            </div>
            <div className={styles.line3}>
              <div className={styles.sparkle}>
                <Image
                  priority
                  src="/sparkle-outline.svg"
                  alt="sparkle"
                  width={67}
                  height={67}
                />
              </div>
              <h1 className={styles.title}>PAYMENTS</h1>
              <div className={styles.eye}>
                <SplineViewer eventsTarget="global" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.getstarted}>
          <div className={styles.para}>
            First payment gateway that uses Layer Zero and World coin to create
            a secure & fast way to pay your friends and others.
          </div>
          <div className={styles.right}>
            <Link href="/signup">
              <Button />
            </Link>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.inner}>
            <div className={styles.top}>
              <div className={styles.left}>
                <div className={styles.heading}>What does</div>
                <div className={styles.subheading}>Eyepay</div>
                <div className={styles.subheading2}>do?</div>
                <div className={styles.sparkle}>
                  <Image
                    priority
                    src="/sparkle-outline.svg"
                    alt="sparkle"
                    width={67}
                    height={67}
                  />
                </div>
              </div>
              <div className={styles.right}>
                EyePay is the first payment gateway that uses Layer Zero and
                World coin to create a secure & fast way to pay your friends and
                others.
              </div>
            </div>
            <div className={styles.ss}>
              <img src="/Images/ss.png" alt="ss" />
            </div>
          </div>
        </div>
        {/* <div className={styles.section3}>
          <div className={styles.heading5}>
            Powered
            <h1
              style={{ transform: "rotate(-24deg)" }}
              className={styles.span1}
            >
              by
              <Image
                priority
                src="/sparkle-outline.svg"
                alt="sparkle"
                width={67}
                height={67}
              />
            </h1>
          </div>
          <div className={styles.sponsers}>
            <div className={styles.items}>
              <Image
                priority
                src="/sponserpngs/optimisum.png"
                alt="arrow"
                width={155}
                height={58}
              />{" "}
              <Image
                priority
                src="/sponserpngs/worldcoin.png"
                alt="arrow"
                width={155}
                height={32}
              />{" "}
              <Image
                priority
                src="/sponserpngs/hyperlane.png"
                alt="arrow"
                width={155}
                height={58}
              />
            </div>
            <div className={styles.items}>
              <Image
                priority
                src="/sponserpngs/zora.png"
                alt="arrow"
                width={155}
                height={58}
              />
              <Image
                priority
                src="/sponserpngs/base.png"
                alt="arrow"
                width={155}
                height={68}
              />
              <Image
                priority
                src="/sponserpngs/mode.png"
                alt="arrow"
                width={155}
                height={68}
              />
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
}
