require 'rails_helper'

RSpec.describe "evaluations/new", type: :view do
  before(:each) do
    assign(:test, Test.new(
      title: "MyString",
      number_questions: 1,
      type: 1
    ))
  end

  it "renders new test form" do
    render

    assert_select "form[action=?][method=?]", tests_path, "post" do

      assert_select "input[name=?]", "test[title]"

      assert_select "input[name=?]", "test[number_questions]"

      assert_select "input[name=?]", "test[type]"
    end
  end
end
