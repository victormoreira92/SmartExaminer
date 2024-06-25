require 'rails_helper'

RSpec.describe "evaluations/index", type: :view do
  before(:each) do
    assign(:tests, [
      Test.create!(
        title: "Title",
        number_questions: 2,
        type: 3
      ),
      Test.create!(
        title: "Title",
        number_questions: 2,
        type: 3
      )
    ])
  end

  it "renders a list of evaluations" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Title".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(2.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(3.to_s), count: 2
  end
end
