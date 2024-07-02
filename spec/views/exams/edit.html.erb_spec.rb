require 'rails_helper'

RSpec.describe "exams/edit", type: :view do
  let(:exam) {
    Exam.create!(
      title: "MyString",
      description: "MyString"
    )
  }

  before(:each) do
    assign(:exam, exam)
  end

  it "renders the edit exam form" do
    render

    assert_select "form[action=?][method=?]", exam_path(exam), "post" do

      assert_select "input[name=?]", "exam[title]"

      assert_select "input[name=?]", "exam[description]"
    end
  end
end
