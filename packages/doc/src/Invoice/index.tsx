import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";
import polishNumber from "../utils/polishNumber";
import styles from "./styles.module.scss";

const InvoiceTypes = ["DUPLIKAT", "ORYGINAŁ", "KOPIA"];

// https://magic.reactjs.net/htmltojsx.htm
export default function Invoice({ query: { data } }) {
  useStyles(styles);

  const invoice = JSON.parse(decodeURIComponent(data));

  return (
    <div className={styles.Invoice}>
      <div className={styles.pageContainer}>
        <div className={styles.marginStyle}>
          {[invoice]
            .map((item) => ({
              ...item,
              getSeldateLiteral: () =>
                new Intl.DateTimeFormat("pl-PL", { dateStyle: "long" }).format(
                  new Date(item.seldate)
                ),
              getNetto: () =>
                new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(
                  item.products.reduce((result, { netto }) => result + netto, 0)
                ),
              getVat: () =>
                new Intl.NumberFormat("pl-PL", {}).format(
                  item.products.reduce(
                    (result, { vat }) => result + vat * 100,
                    0
                  )
                ),
              getVat1: () =>
                new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(
                  item.products.reduce(
                    (result, { netto, vat }) => result + vat * netto,
                    0
                  )
                ),
              getBrutto: () =>
                new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(
                  item.products.reduce(
                    (result, { netto, vat }) => result + (1 + vat) * netto,
                    0
                  )
                ),
              getBruttoLiteral: () =>
                ((value) =>
                  `${polishNumber(value)} PLN ${(value * 100) % 100}/100`)(
                  item.products.reduce(
                    (result, { netto, vat }) => result + (1 + vat) * netto,
                    0
                  )
                ),
            }))
            .map(
              (
                {
                  seller,
                  buyer,
                  products,
                  seldate,
                  getSeldateLiteral,
                  paydate,
                  paykind,
                  title,
                  type,
                  getNetto,
                  getVat,
                  getVat1,
                  getBrutto,
                  getBruttoLiteral,
                },
                key
              ) => (
                <div key={key} className={styles.topGroupStyle}>
                  <div>&nbsp;</div>

                  <table
                    cellSpacing={0}
                    cellPadding={1}
                    width="100%"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td className={styles.dateHeader} valign="top">
                          Warszawa - {getSeldateLiteral()}
                        </td>
                        <td className={styles.titleHeader} valign="top">
                          FAKTURA VAT
                          <br />
                          nr {title}
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td className={styles.titleSubHeader} valign="top">
                          {InvoiceTypes[type]}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    cellSpacing={0}
                    cellPadding={1}
                    width="100%"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td style={{ fontSize: "10px" }}>&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    cellSpacing={0}
                    cellPadding={1}
                    width="100%"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td className={styles.sellerHeader} valign="top">
                          Sprzedawca
                        </td>
                        <td>&nbsp;</td>
                        <td className={styles.buyerHeader} valign="top">
                          Nabywca
                        </td>
                      </tr>
                      <tr>
                        {[seller].map(
                          (
                            {
                              name,
                              street,
                              code,
                              city,
                              nip,
                              regon,
                              bank,
                              account,
                            },
                            key
                          ) => (
                            <td
                              key={key}
                              className={styles.seller}
                              valign="top"
                            >
                              {name}
                              <br />
                              {street}
                              <br />
                              {code}
                              &nbsp;
                              {city}
                              <br />
                              NIP: {nip}
                              <br />
                              REGON: {regon}
                              <br />
                              {bank}
                              <br />
                              {account}
                            </td>
                          )
                        )}
                        <td>&nbsp;</td>
                        {[buyer].map(
                          ({ name, street, code, city, nip }, key) => (
                            <td key={key} className={styles.buyer} valign="top">
                              {name}
                              <br />
                              {street}
                              <br />
                              {code}
                              &nbsp;
                              {city}
                              <br />
                              NIP: {nip}
                            </td>
                          )
                        )}
                      </tr>
                    </tbody>
                  </table>

                  <table
                    cellSpacing={0}
                    cellPadding={1}
                    width="100%"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td style={{ fontSize: "5px" }}>&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    key={key}
                    cellSpacing={0}
                    cellPadding={1}
                    width="100%"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td className={styles.sellDate} valign="top">
                          Data sprzedaży: {seldate}
                        </td>
                        <td className={styles.payDate_payKind} valign="top">
                          Termin płatności: {paydate}
                          <br />
                          Sposób zapłaty: {paykind}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: "2px" }}>&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    className={styles.productTable}
                    cellSpacing={0}
                    cellPadding={1}
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          className={styles.productHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          Lp
                        </td>
                        <td
                          className={styles.productHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          Nazwa
                        </td>
                        <td
                          className={styles.productHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          PKWiU
                          <br />
                          PKOB
                        </td>
                        <td
                          className={styles.productHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          Ilość
                        </td>
                        <td
                          className={styles.productHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          Jm
                        </td>
                        <td
                          className={styles.productHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          Netto (PLN)
                        </td>
                        <td
                          className={styles.productHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          Wartość
                          <br />
                          netto (PLN)
                        </td>
                        <td
                          className={styles.productHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          VAT (%)
                        </td>
                        <td
                          className={styles.productHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          Kwota
                          <br />
                          VAT (PLN)
                        </td>
                        <td
                          className={styles.productHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          Brutto (PLN)
                        </td>
                      </tr>
                      {products
                        .map((item, key) => ({
                          ...item,
                          position: () => key + 1,
                          getAmount: () =>
                            new Intl.NumberFormat("pl-PL", {
                              minimumFractionDigits: 2,
                            }).format(item.amount),
                          getNetto: () =>
                            new Intl.NumberFormat("pl-PL", {
                              minimumFractionDigits: 2,
                            }).format(item.netto),
                          getNetto1: () =>
                            new Intl.NumberFormat("pl-PL", {
                              minimumFractionDigits: 2,
                            }).format(item.netto),
                          getVat: () =>
                            new Intl.NumberFormat("pl-PL", {}).format(
                              item.vat * 100
                            ),
                          getVat1: () =>
                            new Intl.NumberFormat("pl-PL", {
                              minimumFractionDigits: 2,
                            }).format(item.vat * item.netto),
                          getBrutto: () =>
                            new Intl.NumberFormat("pl-PL", {
                              minimumFractionDigits: 2,
                            }).format((1 + item.vat) * item.netto),
                        }))
                        .map(
                          (
                            {
                              position,
                              name,
                              symbol,
                              getAmount,
                              unit,
                              getNetto,
                              getNetto1,
                              getVat,
                              getVat1,
                              getBrutto,
                            },
                            key
                          ) => (
                            <tr key={key} className={styles.productTr}>
                              <td
                                className={styles.productTd}
                                style={{ textAlign: "right" }}
                                valign="top"
                              >
                                {position()}
                              </td>
                              <td
                                className={styles.productTd}
                                style={{ textAlign: "left" }}
                                valign="top"
                              >
                                {name}
                              </td>
                              <td
                                className={styles.productTd}
                                style={{ textAlign: "right" }}
                                valign="top"
                              >
                                {symbol}
                              </td>
                              <td
                                className={styles.productTd}
                                style={{ textAlign: "right" }}
                                valign="top"
                              >
                                {getAmount()}
                              </td>
                              <td
                                className={styles.productTd}
                                style={{ textAlign: "right" }}
                                valign="top"
                              >
                                {unit}
                              </td>
                              <td
                                className={styles.productTd}
                                style={{ textAlign: "right" }}
                                valign="top"
                              >
                                {getNetto()}
                              </td>
                              <td
                                className={styles.productTd}
                                style={{ textAlign: "right" }}
                                valign="top"
                              >
                                {getNetto1()}
                              </td>
                              <td
                                className={styles.productTd}
                                style={{ textAlign: "right" }}
                                valign="top"
                              >
                                {getVat()}
                              </td>
                              <td
                                className={styles.productTd}
                                style={{ textAlign: "right" }}
                                valign="top"
                              >
                                {getVat1()}
                              </td>
                              <td
                                className={styles.productTd}
                                style={{ textAlign: "right" }}
                                valign="top"
                              >
                                {getBrutto()}
                              </td>
                            </tr>
                          )
                        )}
                      <tr className={styles.summaryTr}>
                        <td
                          className={styles.summaryText1}
                          style={{ paddingTop: "10px" }}
                          valign="top"
                          colSpan={10}
                        >
                          Podsumowanie&nbsp;w/g&nbsp;stawek&nbsp;VAT&nbsp;
                        </td>
                      </tr>
                      <tr className={styles.summaryTr}>
                        <td style={{ fontSize: "2px" }}>&nbsp;</td>
                      </tr>
                      <tr className={styles.summaryTr}>
                        <td
                          className={styles.summaryBlankText}
                          valign="top"
                          colSpan={6}
                        >
                          &nbsp;
                        </td>
                        <td
                          className={styles.summaryHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          Wartość
                          <br />
                          netto (PLN)
                        </td>
                        <td
                          className={styles.summaryHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          VAT (%)
                        </td>
                        <td
                          className={styles.summaryHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          Kwota
                          <br />
                          VAT (PLN)
                        </td>
                        <td
                          className={styles.summaryHeaderTd}
                          style={{ textAlign: "center" }}
                          valign="top"
                        >
                          Brutto (PLN)
                        </td>
                      </tr>
                      <tr className={styles.summaryTr}>
                        <td
                          className={styles.summaryBlankText}
                          valign="top"
                          colSpan={6}
                        >
                          &nbsp;
                        </td>
                        <td
                          className={styles.summaryTd}
                          style={{ textAlign: "right" }}
                          valign="top"
                        >
                          {getNetto()}
                        </td>
                        <td
                          className={styles.summaryTd}
                          style={{ textAlign: "right" }}
                          valign="top"
                        >
                          {getVat()}
                        </td>
                        <td
                          className={styles.summaryTd}
                          style={{ textAlign: "right" }}
                          valign="top"
                        >
                          {getVat1()}
                        </td>
                        <td
                          className={styles.summaryTd}
                          style={{ textAlign: "right" }}
                          valign="top"
                        >
                          {getBrutto()}
                        </td>
                      </tr>
                      <tr className={styles.summaryTr}>
                        <td
                          className={styles.summaryBlankText}
                          valign="top"
                          colSpan={6}
                        >
                          Ogółem&nbsp;
                        </td>
                        <td
                          className={styles.summaryAllTd}
                          style={{ textAlign: "right" }}
                          valign="top"
                        >
                          {getNetto()}
                        </td>
                        <td
                          className={styles.summaryAllTd}
                          style={{ textAlign: "right" }}
                          valign="top"
                        >
                          &nbsp;
                        </td>
                        <td
                          className={styles.summaryAllTd}
                          style={{ textAlign: "right" }}
                          valign="top"
                        >
                          {getVat1()}
                        </td>
                        <td
                          className={styles.summaryAllTd}
                          style={{ textAlign: "right" }}
                          valign="top"
                        >
                          {getBrutto()}
                        </td>
                      </tr>
                      <tr className={styles.summaryTr}>
                        <td style={{ fontSize: "10px" }} colSpan={10}>
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    cellSpacing={0}
                    cellPadding={1}
                    width="100%"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td className={styles.payText1}>
                          Do zapłaty: {getBrutto()} PLN
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.payText2}>
                          słownie: {getBruttoLiteral()}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: "10px" }}>&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    cellSpacing={0}
                    cellPadding={1}
                    width="100%"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td className={styles.sellerPersonHeader} valign="top">
                          Osoba upoważniona do wystawienia faktury
                        </td>
                        <td>&nbsp;</td>
                        <td className={styles.buyerPersonHeader} valign="top">
                          Osoba upoważniona do odebrania faktury
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: "5px" }} colSpan={3}>
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        {[seller].map(({ name }, key) => (
                          <td
                            key={key}
                            className={styles.sellerPerson}
                            valign="top"
                          >
                            {name}
                          </td>
                        ))}
                        <td>&nbsp;</td>
                        <td className={styles.buyerPerson} valign="top" />
                      </tr>
                      <tr>
                        <td style={{ fontSize: "5px" }} colSpan={3}>
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    style={{ marginTop: "180px" }}
                    cellSpacing={0}
                    cellPadding={0}
                    width="100%"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td style={{ fontSize: "1px" }}>&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    cellSpacing="0"
                    cellPadding="1"
                    width="100%"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td className={styles.endText} valign="bottom"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            )}

          <table cellSpacing="0" cellPadding="1" width="100%" align="center">
            <tbody>
              <tr>
                <td className={styles.pageFooter} valign="bottom">
                  1/1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
