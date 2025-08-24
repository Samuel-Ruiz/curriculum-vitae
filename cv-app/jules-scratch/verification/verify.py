from playwright.sync_api import sync_playwright, Page, expect

def test_screenshot(page: Page):
    page.goto("http://localhost:8000")
    expect(page).to_have_title("CvApp")
    page.screenshot(path="/app/cv-app/jules-scratch/verification/verification.png")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    test_screenshot(page)
    browser.close()
