use starknet::ContractAddress;

#[derive(Copy, Drop, Serde)]
#[dojo::model]
struct Gladiether {
    #[key]
    owner: ContractAddress,
    power: u8,
    in_arena: bool,
}