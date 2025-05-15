describe('App.vue 测试', () => {
  it('按钮点击时 count 正常增加，超过 5 时禁用按钮', () => {
    // 访问页面
    cy.visit('http://localhost:5173/')
    // 验证初始 count 值为 0
    cy.get('#increment-btn').should('contain', 'count is 0')

    // 点击按钮 4 次
    for (let i = 0; i < 4; i++) {
      cy.get('#increment-btn').click()
      cy.get('#increment-btn').should('contain', `count is ${i + 1}`)
    }

    // 点击第 5 次时按钮禁用
    cy.get('#increment-btn').click()
    cy.get('#increment-btn').should('contain', 'count is 5')
    cy.get('#increment-btn').should('be.disabled') // 按钮禁用

    // 验证警告消息是否显示
    cy.get('.warning').should('contain', '已达到最大点击次数')
  })
})
