require 'rails_helper'

RSpec.describe "exams/show", type: :view do
  before(:each) do
    assign(:exam, Exam.create!(
      title: "Title",
      description: "Description"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/Description/)
  end
end
