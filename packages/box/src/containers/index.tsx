import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import styles from "./styles.module.scss";

const ratio = Number(1270 / 5000);

export default function Section() {
  const [layers, setLayers] = useState(() =>
    [
      {
        src: "https://www.thule.com/-/p/kjm4D1raf3wNv4T-V_2CzeQLeFH1hkoE8T2A5s8PuQs/rs:fit/f:avif/cb:1.4/q:80/h:1200/w:1200/plain/approved/std.lang.all/54/41/1475441.png",
        url: "https://www.thule.com/pl-pl/cargo-carrier/car-top-carrier/thule-motion-3-xl-low-_-639401",
        delta: 2160,
        offset: -265,
        scale: ((scale) => [scale, scale])((2160 / 430) * ratio),
        origin: [475, 450],
      },
      {
        checked: true,
        src: "https://www.thule.com/-/p/YLzcbkKTHlAuQ0vQooBjeNNsqumlqiVkpW4FkxLPMuw/rs:fit/f:avif/cb:1.4/q:80/h:1200/w:1200/plain/approved/std.lang.all/54/39/1475439.png",
        url: "https://www.thule.com/pl-pl/cargo-carrier/car-top-carrier/thule-motion-3-xl-low-_-639400",
        delta: 2160,
        offset: -265,
        scale: ((scale) => [scale, scale])((2160 / 430) * ratio),
        origin: [475, 450],
      },
      {
        src: "https://www.thule.com/-/p/V1729fcwbkYcaWN6oDE_tXz-h3tjtKEVMxSu1IQFjXg/rs:fit/f:avif/cb:1.4/q:80/h:1200/w:1200/plain/approved/std.lang.all/54/43/1475443.png",
        url: "https://www.thule.com/pl-pl/cargo-carrier/car-top-carrier/thule-motion-3-xxl-low-_-639500",
        delta: 2320,
        offset: -280,
        scale: ((scale) => [scale, scale])((2320 / 460) * ratio),
        origin: [475, 450],
      },
      {
        src: "https://www.thule.com/-/p/0Xg_BFaURLVrO8zL3th8xYJspa2kaA4C8Il5d9QJ_l4/rs:fit/f:avif/cb:2.1/q:80/h:1200/w:1200/plain/approved/std.lang.all/93/92/1389392.png",
        url: "https://www.thule.com/pl-pl/cargo-carrier/car-top-carrier/thule-vector-alpine-_-613501",
        delta: 2280,
        offset: -260,
        scale: ((scale) => [scale, scale])((2280 / 500) * ratio),
        origin: [515, 430],
      },
      {
        src: "https://www.thule.com/-/p/zV7d3rUDvkk0GF32KBAlCiy0_IUoqb3eKpLvQzyJTdo/rs:fit/f:avif/cb:2.1/q:80/h:1200/w:1200/plain/approved/std.lang.all/94/08/1389408.png",
        url: "https://www.thule.com/pl-pl/cargo-carrier/car-top-carrier/thule-vector-m-_-613201",
        delta: 2120,
        offset: -265,
        scale: ((scale) => [scale, scale])((2120 / 465) * ratio),
        origin: [515, 430],
      },
      {
        src: "https://i1.wp.com/audiclubna.org/wp-content/uploads/rs6-avant-mugello-blue-1600.jpg?ssl=1",
        url: "https://audiclubna.org/2022-audi-exclusive-rs-6-avant-sweepstakes-photo-assets-for-chapter-leaders/rs6-avant-mugello-blue-1600",
        delta: 4995,
        offset: -475,
        scale: ((scale) => [-scale, scale])((4995 / 1392) * ratio),
        origin: [990, 870],
      },
      {
        checked: true,
        src: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAA_y2Vy-vlthXH78wwmZBCXyGULLsZCoEcy28vfjSTVaEJDKRkM4vh2JZkX8mPK8nyvf4v8idkn_8omyyzKRS6ySbQr0s2-vg8dHSscyT98O_Ly81dXrx79-U_f_30E61_rJ5fLvf1crk8g_75uy9_-O9ffvngw3_99Jv6g-8uL8Pm2uUZXN4-_2icWEu6rlL_4fIKqsvL07BjePYzhlevMLz45fL_8bT8EcPzv57yy-9fXC6_-wI-H57zLr__eHN2ZcfT5076dZn9GOWf_lbndVX1per6XihRpLJqiiyvk6RMi1K1nSjqqkkT9WdE_E8vN1Kc9Z2f666-F8FRzgX3mtIkLUjkn6WP9EFF-Zk6iHmTCRO3SzkkgBMrJNmLMAMuWaHUU75L4iGKHtLY5psCrI6QrL5JYF21B7ws77B5LbkEbOEtMOnptLnCbcAjMTlxYHGHcuubvQM8N5i3x9LU1PIgTA-Ea3oiCttRiwQVU2vbFum2yy58Sq2POZJoAycxUNfvFSfUDZwODXVL19UldSuPIQPacYNt7a7ylPpxB8Jd7wn1LEXLgMu8oF6OGRbqFdZLSHZyHiuSZ2hLchyKiQFbTYLkOlT3lKQfqx2S95uCpw_6SLD_fYIoSm4lp6TULrCRSvtoBalhjwitxlA6uFhfY0PU0qsVNjemsSDl18LCJfpKA4dX-GktVeMSYG50Q9oMyUMBXiK0NjG5GtLTEpqatOM6lECIHWx-1aIjvXP5SGlgrVHpQbZlFIDj4oQvrsDIyXxiKucr4LM50GC4YUOD3-sR0tYbVHp4tClSGme_FYDzuS3JsDN1D_ibEWTamKDuxh7JA9K03lwD-BxNZJZJtydicSgybhJHCvhEZWQ8F8ja-DHTJzaDopptMAa2I5Z7SZa7whRk2yHTPdluvd0Ssn0_X09otZ1YJPK0km1igfl2VGRHrnVG1rBE21jTVhkDXVUCi6tQAOs4PVogou_Ielm7CfBph_XClg0Itk3VwDSxL9FLU-8VfnNS3PiGJrPVR0HTwiNaA9Xom4JmjtWmaZ5ndQhaedKo2KpZhYRuelJI_rYxA477TnhgGesD2Jork-sW6QS53lTYVocmHE7YiAI4WHRNntv8ngG6Ug0wcJIAW2oc-dbV3pDvnMJ034UbetD3Qy4r8pJvY0le-fS0qSNFY3ptxAiM7ZxOgMxsDgw5n8pjzFfyhq84vn7mymL1eahRYr_Mxb0jv27VAzY3lCNS8kNuoPQuO5UhaNTIx0WdwXZXn1H2o8Gl4w-bTZhwbMnMFEzMkVlYdYNGCattRUXBqaIXwJ51cPHrjB0MUd5iRmG3ImpgEx62xyrkHTjSo6bYGoFLIC5GY9m4-JtgiiE2x512tk1gwEncBbvnSpaAz7Wig9sblEfr0p3pQJ1DT8coc3TIYVB-KE3M2owO7xN30BFcxOE6tqGZkr_LOY5umSc5h6evl6_fvP_Hsnn5eh_7MDwJ3NevBznqITyJPE9es10Hfgpuk687nnAun74JWz8u79-8z94nCRxmvDNhxJvw9Hbx4_n11Tn94xdvvn37P3JXu2_EBgAA?mimetype=image/png",
        url: "https://www.audi.pl/pl/web/pl/modele/a6/a6-avant.html",
        delta: 4939,
        offset: -475,
        // delta: 920, offset:515,
        // delta: 2924, offset:-193,
        // delta: 1095, offset:-430,
        scale: ((scale) => [-scale, scale])((4939 / 2790) * ratio),
        origin: [1780, 565],
      },
    ].map((item) => ({
      ...item,
      checked: Boolean(item.checked),
      name: item.url.split("/").pop(),
    })),
  );

  const [left, top] = useMemo(() => [480, 120], []);

  return (
    <section className={styles.Section}>
      <h2>Boxes</h2>
      <nav>
        {layers.map(({ name, checked }, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) =>
                  (console.log(e.target.checked), setLayers)((layers) =>
                    layers.map((item, i) =>
                      i === index
                        ? { ...item, checked: e.target.checked }
                        : item,
                    ),
                  )
                }
              />
              <span>{name}</span>
            </label>
          </div>
        ))}
      </nav>
      <div className={styles.Preview} style={{ width: 5000 * ratio }}>
        {layers.map(
          (
            { checked, delta, offset, src, scale = [1, 1], origin = [0, 0] },
            index,
          ) => (
            <div
              key={index}
              className={styles.Layer}
              style={{ display: checked ? "block" : "none" }}
            >
              <img
                src={src}
                style={{
                  position: "absolute",
                  left,
                  top,
                  transformOrigin: `0 0`,
                  transform: `scale(${scale.join(", ")}) translate(${origin.map((px) => `${-px}px`).join(", ")})`,
                }}
              />
              <img
                src="https://interactive-examples.mdn.mozilla.net/media/examples/crosshair.svg"
                style={{
                  width: 24,
                  height: 24,
                  position: "absolute",
                  top,
                  left,
                  transform: "translate(-50%, -50%)",
                }}
              />
              {delta && (
                <i
                  style={{
                    position: "absolute",
                    top,
                    left,
                    marginTop: -100,
                    marginLeft: offset,
                    width: delta * ratio,
                    height: 500,
                    border: "1px solid green",
                  }}
                ></i>
              )}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
