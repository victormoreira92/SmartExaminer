# == Schema Information
#
# Table name: questions
#
#  id                 :bigint           not null, primary key
#  content            :string
#  feedback_correct   :text
#  feedback_incorrect :text
#  score              :integer
#  type_answer        :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
FactoryBot.define do
  factory :question do
    content { Faker::Lorem.sentence }
    score { Faker::Number.between(from: 1, to: 10) }
    feedback_correct { Faker::Lorem.paragraph(sentence_count: 20) }
    feedback_incorrect { Faker::Lorem.paragraph(sentence_count: 20) }
    type_answer { 0 }
  end
end
