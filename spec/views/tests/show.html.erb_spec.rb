require 'rails_helper'

RSpec.describe "evaluations/show", type: :view do
  before(:each) do
    assign(:test, Evaluationcreate!(
      title: "Title",
      number_questions: 2,
      type: 3
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
  end
end
