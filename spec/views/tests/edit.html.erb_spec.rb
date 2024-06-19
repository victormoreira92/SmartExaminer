require 'rails_helper'

RSpec.describe "evaluations/edit", type: :view do
  let(:test) {
    Test.create!(
      title: "MyString",
      number_questions: 1,
      type: 1
    )
  }

  before(:each) do
    assign(:test, test)
  end

  it "renders the edit test form" do
    render

    assert_select "form[action=?][method=?]", test_path(test), "post" do

      assert_select "input[name=?]", "test[title]"

      assert_select "input[name=?]", "test[number_questions]"

      assert_select "input[name=?]", "test[type]"
    end
  end
end
