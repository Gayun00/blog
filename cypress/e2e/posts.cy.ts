describe("template spec", () => {
  beforeEach("passes", () => {
    cy.visit("http://localhost:3000/posts");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("블로그 페이지 콘텐츠 렌더링", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000/posts");
    cy.get(":nth-child(1) > .text-2xl").should("have.text", "추천 글");
    cy.get(
      ".swiper-slide-active > .mt-10 > .max-w-sm > .mt-4 > .text-lg"
    ).should("have.text", "예시 포스트 2!");
    cy.get(".flex-col > .text-2xl").should("have.text", "Series");
    cy.get('[href="/posts/Next.js"] > .mt-4 > .text-lg').should(
      "have.text",
      "Next.js"
    );
    cy.get(
      ".swiper-slide-active > .mt-10 > .max-w-sm > .p-2 > .relative > img"
    ).click();
    cy.get(".mb-10").should("have.text", "예시 포스트 2!");
    cy.get('[href="/posts"] > svg').click();
    cy.get('[href="/posts/Next.js"] > .p-2 > .relative > img').click();
    cy.get(".mb-20").should("have.text", "Series: Next.js");
    cy.get(".text-primary > a").should("have.text", "Next.js");
    cy.get(".mt-4 > .text-lg").should("have.text", "1");
    cy.get(".relative > img").click();
    cy.get(".mb-10").should("have.text", "1");
    cy.get(".p-6 > .flex").click();
    cy.get(".mb-10").should("have.text", "예시 포스트 1!");
    cy.get(".items-end > .flex > svg").click();
    cy.get(".mb-10").should("have.text", "1");
    /* ==== End Cypress Studio ==== */
  });
});
