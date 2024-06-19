use starknet::ContractAddress;

// useful for the leaderboard to track statistics
#[derive(Model, Copy, Drop, Serde)]
struct Player {
    #[key]
    address: ContractAddress,
    luck_point: u8,
    is_king: bool,
    games_won: u256,
    games_lost: u256
}