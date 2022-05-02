import ConfigurationProperties from '../../config/configuration-properties';

let eProps : ConfigurationProperties = new ConfigurationProperties();

export const redisConfig = {
  'host' : eProps.getRedisHost(),
  'port' : eProps.getRedisPort(),
  'password' : eProps.getRedisPassword() ,
  'auth' : eProps.getRedisAuthKey() ,
  'username' : eProps.getRedisUsername()
};