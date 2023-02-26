import React from "react";
import styles from "./styles.module.scss";

export default function Section() {
  const invoice = {
    seldate: "2021-01-01",
    paydate: "14 dni",
    paykind: "przelew",
    title: "1/2021",
    type: 1,
    seller: {
      name: "",
      street: "",
      code: "",
      city: "",
      nip: "",
      regon: "",
      bank: "",
      account: "",
    },
    buyer: {
      name: "",
      street: "",
      code: "",
      city: "",
      nip: "",
    },
    products: [
      {
        name: "",
        amount: 1.0,
        netto: 100.0,
        vat: 0.23,
      },
    ],
  };

  return (
    <section className={styles.Section}>
      <h2>Print</h2>
      <ul>
        <li>
          <a href="print/example.pdf?format=pdf">
            print/example.pdf?format=pdf
          </a>
        </li>
        <li>
          <a href="wkhtmltopdf/example.pdf?format=pdf">
            wkhtmltopdf/example.pdf?format=pdf
          </a>
        </li>
        <li>
          <a
            href={`print/invoice.pdf?data=${encodeURIComponent(
              JSON.stringify(invoice)
            )}`}
          >
            print/invoice.pdf?data=
          </a>
        </li>
        <li>
          <a
            href={`wkhtmltopdf/invoice.pdf?data=${encodeURIComponent(
              JSON.stringify(invoice)
            )}`}
          >
            wkhtmltopdf/invoice.pdf?data=
          </a>
        </li>
      </ul>
    </section>
  );
}
