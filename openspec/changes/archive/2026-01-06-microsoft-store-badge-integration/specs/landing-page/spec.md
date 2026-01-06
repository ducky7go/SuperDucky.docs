## ADDED Requirements

### Requirement: Microsoft Store 徽标显示

The landing page hero section SHALL display a Microsoft Store installation badge that links to the official SuperDucky application page on Microsoft Store.

#### Scenario: 用户在首页看到 Microsoft Store 徽标

**Given** a user navigates to the SuperDucky documentation landing page
**When** the hero section loads
**Then** a Microsoft Store badge SHALL be displayed in the buttons section alongside other call-to-action buttons
**And** the badge SHALL use the official Microsoft Store badge image from `@site/static/img/store-badge.png`
**And** the badge SHALL be properly sized and aligned with existing buttons

#### Scenario: 用户点击徽标跳转到 Microsoft Store 页面

**Given** a user is viewing the SuperDucky landing page
**When** they click on the Microsoft Store badge
**Then** the browser SHALL navigate to the Microsoft Store application page at `https://apps.microsoft.com/store/detail/9ndbtdkqbx30`
**And** the link SHALL open in a new tab (target="_blank")
**And** the user SHALL see the official SuperDucky app listing on Microsoft Store

#### Scenario: Microsoft Store 徽标在响应式布局中正确显示

**Given** a user views the landing page on different screen sizes
**When** the page renders on mobile (width < 768px), tablet (768px - 1024px), or desktop (width >= 1024px)
**Then** the Microsoft Store badge SHALL maintain proper proportions and readability
**And** the badge SHALL not overflow or break the layout
**And** the badge SHALL remain clickable on all device sizes

### Requirement: 页脚 Microsoft Store 链接

The website footer SHALL include a link to the Microsoft Store application page as an alternative download channel.

#### Scenario: 用户在页脚看到 Microsoft Store 链接

**Given** a user scrolls to the bottom of any page on the SuperDucky documentation site
**When** the footer section is visible
**Then** a link labeled "Microsoft Store" SHALL be displayed
**And** the link SHALL be grouped with other site links
**And** the link SHALL be clearly labeled and accessible

#### Scenario: 用户点击页脚的 Microsoft Store 链接

**Given** a user is viewing any page on the SuperDucky documentation site
**When** they click the "Microsoft Store" link in the footer
**Then** the browser SHALL navigate to the Microsoft Store application page at `https://apps.microsoft.com/store/detail/9ndbtdkqbx30`
**And** the link SHALL open in a new tab (target="_blank")
