# == Schema Information
#
# Table name: tests
#
#  id          :bigint           not null, primary key
#  description :text
#  status_test :integer
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :test do
   title { Faker::Lorem.word }
    status_test { 0 }
    description { Faker::Lorem.sentence(word_count: 20) }
  end
end
