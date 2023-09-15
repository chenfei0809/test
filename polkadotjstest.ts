import { ApiPromise,Keyring,WsProvider } from "@polkadot/api";
import '@polkadot/api-augment';
// import type {FrameSystemAccountInfo} from '@polkadot/types/lookup';
import {KeyringPair} from '@polkadot/keyring/types';

const WS='ws://192.168.28.128:9944';
const connect=async()=>{
  const wsProvider=new WsProvider(WS);
  const api=await ApiPromise.create({provider:wsProvider,types:{}});
  await api.isReady;
  return api;
}

const sleep=(ms:number)=>new Promise(r=>global.setTimeout(r,ms));

// const getConst=async (api:ApiPromise)=>{
//   const existentialDeposit=await api.consts.balances.existentialDeposit.toHuman();
//   return existentialDeposit;
// }

// const getFreeBalance = async (api:ApiPromise,address:string)=>{
//   const {data:{free,},}:FrameSystemAccountInfo =await api.query.system.account(address);
//   return free;
// }

// const transfer=async (api:ApiPromise,alice:KeyringPair,bob:string,amount:number)=>{
//   await api.tx.balances.transfer(bob,amount).signAndSend(alice,res=>{ console.log('Tx status',res.status)});
// }

// const metadata=async (api:ApiPromise)=>{
//     return (await api.rpc.state.getMetadata()).toString();
// }

// const subscribe=async (api:ApiPromise,address:string)=>{
//   await api.query.system.account(address,aliceInfo=>{
//     const free=aliceInfo.data.free;
//     console.log('free',free.toHuman());
//   })
// }

// const sub_event=async(api:ApiPromise)=>{
//   await api.query.system.events(events=>{
//     events.forEach(function(event){
//       console.log('index',event['event']['index'].toHuman());
//       console.log('data',event['event']['data'].toHuman());
//     })
//   })
// }

const do_something=async (api:ApiPromise,alice:KeyringPair,something:number)=>{
    await api.tx.templateModule.doSomething(something).signAndSend(alice,{
      // res=>{
      // console.log('res',res);
    })
}


const sub_something=async(api:ApiPromise)=>{
  return await api.query.templateModule.something();
}

const main=async()=>{
  const api=await connect();
  // const deposit=await getConst(api);
  // console.log('deposit',deposit);

  const keyring=new Keyring({type:'sr25519'});
  const alice=keyring.addFromUri('//Alice');

  await do_something(api,alice,10000);
  const something=await sub_something(api);
  console.log('something',something.toHuman());
  
  // const free= await getFreeBalance(api,alice.address);
  // console.log('deposit is',free.toHuman());

  // const bob= keyring.addFromUri('//Bob');
  // const bob_balance=await getFreeBalance(api,bob.address);
  // console.log('bob balance is',bob_balance.toHuman());
  // await transfer(api,alice,bob.address,10**10+1);
  // await sleep(10);
  // const bob_balance2=await getFreeBalance(api,bob.address);
  // console.log('bob balance is',bob_balance2.toHuman());

  // console.log('metadata ',await metadata(api));

  // await subscribe(api,alice.address);

  // await sub_event(api);

  await sleep(200000);

  console.log('main');
}

main().then(()=>{
  console.log('success');
  process.exit(0);
}).catch((err:any)=>{
  console.log('err',err);
  process.exit(1);
})


