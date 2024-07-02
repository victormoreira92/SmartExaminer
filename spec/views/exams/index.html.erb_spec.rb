require 'rails_helper'

RSpec.describe "exams/index", type: :view do
  before(:each) do
    assign(:exams, [
      Exam.create!(
        title: "Title",
        description: "Description"
      ),
      Exam.create!(
        title: "Title",
        description: "Description"
      )
    ])
  end

  it "renders a list of exams" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Title".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Description".to_s), count: 2
  end
end
