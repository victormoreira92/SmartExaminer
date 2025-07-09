# == Schema Information
#
# Table name: categories
#
#  id            :bigint           not null, primary key
#  category_name :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
FactoryBot.define do
  factory :category do
    category_name { Faker::Lorem.word }
  end
end
